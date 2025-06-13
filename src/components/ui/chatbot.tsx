// src/components/ui/chatbot.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from './button'
import { MessageSquare, X, SendHorizonal } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Sample bot welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: 'Hello! How can I help you today?',
          sender: 'bot',
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Call the API endpoint
      const response = await fetch(process.env.NEXT_PUBLIC_CHATBOT_API_URL || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: inputValue
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from chatbot')
      }

      const data = await response.json()
      
      // Add bot response (assuming the API returns a text response)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I received your message but didn't get a proper response.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error calling chatbot API:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting to the service. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      className={cn(
        "fixed bottom-0 right-4 z-50 flex flex-col items-end",
        "transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[80vh]" : "h-14"
      )}
      style={{
        width: isOpen ? '400px' : '250px',
        height: isOpen ? '80vh' : 'auto'
      }}
    >
      {/* Closed state - just the header bar */}
      <div 
        className={cn(
          "flex w-full cursor-pointer items-center justify-between rounded-t-lg border bg-background p-3 shadow-lg",
          !isOpen && "rounded-b-lg"
        )}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <h3 className="text-base font-semibold">Help Bot</h3>
        </div>
        {isOpen ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="h-7 w-7 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        ) : (
          <div className="h-7 w-7" />
        )}
      </div>

      {/* Open state - full chat */}
      {isOpen && (
        <div className="flex w-full flex-1 flex-col rounded-b-lg border border-t-0 bg-background shadow-lg overflow-hidden">
          {/* Messages container with proper scrolling */}
          <div 
            className="flex-1 overflow-y-auto p-4 overflow-x-hidden"
            style={{
              maxHeight: 'calc(100% - 72px)',
              minHeight: '100px'
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 text-base ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                >
                  {message.text}
                  <div className={`mt-1 text-xs ${message.sender === 'user' ? 'text-primary-foreground/70' : 'opacity-70'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[85%] rounded-lg px-4 py-2 text-base bg-muted">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Fixed input area that stays at the bottom */}
          <div className="border-t p-3 bg-background w-full">
            <div className="flex gap-2 w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 rounded border px-4 py-3 text-base text-black focus:outline-none focus:ring-1 focus:ring-primary w-full"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === '' || isLoading}
                size="sm"
                className="h-12 w-12 p-0 flex-shrink-0"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin">↻</div>
                ) : (
                  <SendHorizonal className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}