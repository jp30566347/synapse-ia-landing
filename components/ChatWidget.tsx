'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] sm:w-[400px] h-[500px] bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden dark:bg-zinc-900 dark:border-zinc-800"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground dark:bg-zinc-800 dark:text-zinc-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-background/20 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Synapse IA Assistant</h3>
                  <p className="text-xs opacity-80">Automation Expert</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-zinc-950/50">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm mt-8 px-6">
                  <p>👋 Bonjour! Je suis l'assistant virtuel de Synapse IA.</p>
                  <p className="mt-2">Comment puis-je vous aider à automatiser vos processus aujourd'hui?</p>
                </div>
              )}
              
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    m.role === 'user'
                      ? "ml-auto bg-primary text-primary-foreground dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-muted dark:bg-zinc-800 dark:text-zinc-100"
                  )}
                >
                  {m.content}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted dark:bg-zinc-800 dark:text-zinc-100">
                   <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-background border-t border-border dark:bg-zinc-900 dark:border-zinc-800">
              <div className="relative flex items-center">
                <input
                  className="flex-1 px-4 py-2 pr-10 rounded-full border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Tapez votre message..."
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 p-1.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-100 dark:text-zinc-900"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="text-[10px] text-center text-muted-foreground mt-2 opacity-60">
                L'IA peut faire des erreurs. Vérifiez les informations importantes.
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-zinc-100 dark:text-zinc-900"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
