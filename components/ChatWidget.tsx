'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Loader2, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    onError: (err) => {
      setError(err.message || 'Failed to send message. Please try again.');
    },
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

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('openChat', handler);
    return () => window.removeEventListener('openChat', handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-600 to-accent-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/20 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Synapsia Assistant</h3>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {error && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p>{error}</p>
                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="mt-2 text-xs underline hover:no-underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}
              {messages.length === 0 && !error && (
                <div className="text-center text-slate-300 text-sm mt-8 px-6">
                  <p>👋 Hello!</p>
                  <p>Welcome to Synapsia!</p>
                  <p className="mt-2">How can I help you automate your processes today?</p>
                </div>
              )}
              
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    m.role === 'user'
                      ? "ml-auto bg-gradient-to-r from-brand-600 to-accent-600 text-white"
                      : "bg-slate-800 text-slate-200"
                  )}
                >
                  {m.content}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-slate-800 text-slate-200">
                   <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-700">
              <div className="relative flex items-center">
                <input
                  className="flex-1 px-4 py-2 pr-10 rounded-full border border-slate-600 bg-slate-800 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 placeholder-slate-500"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 p-1.5 bg-gradient-to-r from-brand-600 to-accent-600 text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="text-[10px] text-center text-slate-500 mt-2">
                AI can make mistakes. Check important info.
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-brand-500"
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
