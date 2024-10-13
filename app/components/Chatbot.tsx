'use client'

import { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, Loader2 } from 'lucide-react'
import { useChat } from 'ai/react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const { messages, input, handleInputChange, isLoading, handleSubmit, setMessages } = useChat();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send the user's message
      const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
      setMessages([...messages, userMessage]); // Update local messages state

      // Send the message to the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const assistantMessage: Message = { id: Date.now().toString(), role: 'assistant', content: data.content };

      // Update messages with assistant's response
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md bg-background rounded-lg shadow-lg overflow-hidden border border-border">
      <div className="p-4 bg-primary text-primary-foreground font-bold flex items-center justify-between">
        <span>MindTrack AI Assistant</span>
        <span className="text-xs bg-primary-foreground text-primary px-2 py-1 rounded-full">Powered by Gemini</span>
      </div>
      <ScrollArea className="h-[400px] p-4" ref={scrollAreaRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 p-3 rounded-lg ${
              message.role === 'user' ? 'bg-primary text-primary-foreground ml-auto' : 'bg-muted'
            } max-w-[80%]`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={onSubmit} className="p-4 bg-muted flex items-center">
        <Input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={handleInputChange}
          className="flex-grow mr-2 bg-background"
        />
        <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}
