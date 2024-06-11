import type { APIRoute } from 'astro';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const post: APIRoute = async ({ request }) => {
  const { message } = await request.json();

  if (!message) {
    return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    return new Response(JSON.stringify({ answer: response.choices[0].message.content?.trim() }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch response from OpenAI' }), { status: 500 });
  }
};
