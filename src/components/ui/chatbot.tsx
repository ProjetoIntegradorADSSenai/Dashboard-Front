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

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I understand your question about that.",
        "Let me check that for you.",
        "Here's what I found regarding your query.",
        "That's an interesting question!",
        "I'll need more information to help with that.",
      ]
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
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
            className="flex-1 overflow-y-auto p-4 overflow-x-hidden" // Added overflow-x-hidden here
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
            <div ref={messagesEndRef} />
          </div>

          {/* Fixed input area that stays at the bottom */}
          <div className="border-t p-3 bg-background w-full"> {/* Added w-full here */}
            <div className="flex gap-2 w-full"> {/* Added w-full here */}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 rounded border px-4 py-3 text-base text-black focus:outline-none focus:ring-1 focus:ring-primary w-full" // Added w-full here
              />
              <Button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                size="sm"
                className="h-12 w-12 p-0 flex-shrink-0" // Added flex-shrink-0 here
              >
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}