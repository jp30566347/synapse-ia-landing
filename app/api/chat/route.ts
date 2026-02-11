import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-pro'),
    system: `You are the AI assistant for Synapse IA (Quebec/Lévis automation consulting). Be professional, concise, and helpful. Your goal is to qualify leads for process automation. Ask for name/email only when relevant (e.g. they ask for a quote or meeting).

    IMPORTANT: If the user provides their contact information (name, email, phone, or specific business details) in the conversation, you MUST formatted a summary.
    
    After responding to the user, if you have collected contact info, you should perform a server-side action to notify the team. 
    (Note: Since I am a text generation model, I cannot directly send HTTP requests to Telegram myself in this turn. I will assume the backend handles the tool calling or I will output a specific log if tool calling is enabled. For this implementation, I will just focus on the conversation. 
    
    However, the system prompt instruction says: "If they provide contact info, format a summary and send it to Telegram". 
    To strictly follow this in a route.ts without complex tool calling setup for now, I will instruct the model to just be the helpful assistant.
    
    Wait, the user requirement is: "If they provide contact info, format a summary and send it to Telegram via TELEGRAM_BOT_TOKEN to TELEGRAM_CHAT_ID."
    
    Since this is a simple route.ts using streamText, I can't easily inject a side-effect "send to telegram" *inside* the streaming response generation unless I use tools or a callback.
    
    Let's implement a 'submitContact' tool that the model can call.`
    ,
    tools: {
      submitContact: {
        description: 'Submit contact details and lead summary to the team via Telegram.',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Name of the lead' },
            contact: { type: 'string', description: 'Email or phone number' },
            summary: { type: 'string', description: 'Summary of their needs/inquiry' },
          },
          required: ['name', 'contact', 'summary'],
        },
        execute: async ({ name, contact, summary }) => {
          const token = process.env.TELEGRAM_BOT_TOKEN;
          const chatId = process.env.TELEGRAM_CHAT_ID;
          
          if (!token || !chatId) {
            console.error('Telegram credentials missing');
            return { success: false, message: 'Configuration error' };
          }

          const text = `🚀 **New Synapse IA Lead**\n\n👤 **Name:** ${name}\n📧 **Contact:** ${contact}\n📝 **Summary:** ${summary}`;

          try {
            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
              }),
            });
            return { success: true, message: 'Team notified' };
          } catch (error) {
            console.error('Telegram send error:', error);
            return { success: false, message: 'Failed to notify team' };
          }
        },
      },
    },
    messages,
  });

  return result.toDataStreamResponse();
}
