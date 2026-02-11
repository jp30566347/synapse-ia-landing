import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-pro'),
    system: `You are the AI assistant for SynapseIA (Automation Consulting). Be professional, concise, and helpful. Your goal is to qualify leads for process automation. Ask for name/email only when relevant (e.g. they ask for a quote or meeting).

    If the user provides their contact information (name, email, phone, or specific business details) in the conversation, you must suggest submitting their details.
    
    You have a 'submitContact' tool available. If you have collected clear contact info from the user, use this tool to send the lead to the team.
    
    Always answer in English unless the user speaks another language.
    `,
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

          const text = `🚀 **New SynapseIA Lead**\n\n👤 **Name:** ${name}\n📧 **Contact:** ${contact}\n📝 **Summary:** ${summary}`;

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
