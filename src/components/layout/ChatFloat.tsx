export default function ChatFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] cursor-pointer group">
      {/* Concentric rings/shadows effect */}
      <div className="absolute inset-[-15px] rounded-full bg-blue-500/5 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <div className="absolute inset-[-10px] rounded-full bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 delay-75"></div>

      {/* Main Button */}
      <div className="relative w-[60px] h-[60px] bg-[#3b82f6] rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.6)] transform hover:-translate-y-1 transition-all duration-300">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Chat Bubble Base */}
          <path d="M25 8H7C5.89543 8 5 8.89543 5 10V22C5 23.1046 5.89543 24 7 24H21.5L25.5 28V10C25.5 8.89543 24.6046 8 23.5 8H25Z" fill="white" />
          {/* Smile Curve */}
          <path d="M11 18C11 18 13.5 20.5 16 20.5C18.5 20.5 21 18 21 18" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
