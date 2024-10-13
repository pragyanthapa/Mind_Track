import { GoogleGenerativeAI } from '@google/generative-ai';
import { Message } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

// Create a new instance of GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// IMPORTANT: Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new NextResponse('No messages provided', { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const chat = model.startChat({
      history: messages.slice(0, -1).map((message: Message) => ({
        role: message.role === 'user' ? 'user' : 'model',
        parts: [{ text: message.content }],
      })),
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result: any = await chat.sendMessage(lastMessage.content);
    console.log('Result from API:', result);

    // Extract the content from the response
    const responseContent = result.response.candidates[0]?.content.parts[0]?.text || 'No response text available';

    return new NextResponse(JSON.stringify({ content: responseContent }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in chat route:', error);
    return new NextResponse('An error occurred while processing your request', { status: 500 });
  }
}
