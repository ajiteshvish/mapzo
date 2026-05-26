import React from 'react';

export default function ContactBox() {
  return (
    <section className="pt-[60px] px-5 pb-[40px]">
      <div className="max-w-[840px] mx-auto bg-[#e5e9fa] rounded-[16px] px-10 md:px-14 lg:pl-[70px] py-[32px] relative mt-[20px] transition-all">
        <div className="max-w-[540px] z-10 relative flex flex-col items-start">
          <h3 className="text-[17px] font-extrabold mb-1.5 text-[#111827]">Haven&apos;t found what you&apos;re looking for?</h3>
          <p className="text-[13px] text-[#475569] font-medium leading-[1.6] mb-[20px]">
            Contact our Customer Success team and tell us what you&apos;re looking for—we&apos;ll try to create a plan that suits your needs. It&apos;s a win-win!
          </p>
          <button className="bg-[#111827] text-white border-none rounded-full px-[24px] py-[8px] font-bold text-[13px] cursor-pointer hover:bg-black transition-colors shadow-sm">
            Contact us
          </button>
        </div>
        
        {/* Overlapping Avatar Profile */}
        <div className="absolute right-[-28px] top-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full overflow-hidden border-[2px] border-[#e5e9fa] shadow-[0_4px_10px_rgba(0,0,0,0.1)] hidden md:block z-0">
          <img 
            src="/avatar.png" 
            alt="Customer Success" 
            className="w-full h-full object-cover scale-105" 
          />
        </div>
      </div>
    </section>
  );
}
