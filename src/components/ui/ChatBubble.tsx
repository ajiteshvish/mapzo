"use client";

import React from 'react';

export default function ChatBubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className="w-[60px] h-[60px] bg-[#4361ee] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(67,97,238,0.4)] hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat with support"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="11.5" r="1.5" fill="white" stroke="none" />
          <circle cx="15" cy="11.5" r="1.5" fill="white" stroke="none" />
          <path d="M9 15.5c.5 1 1.5 2 3 2s2.5-1 3-2" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
    </div>
  );
}
