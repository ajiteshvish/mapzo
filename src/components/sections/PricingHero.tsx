type PricingHeroProps = {
  selectedRange: number;
  setSelectedRange: (value: number) => void;
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
};

export default function PricingHero({
  selectedRange,
  setSelectedRange,
  isYearly,
  setIsYearly,
}: PricingHeroProps) {
  const stops = [0, 50, 100];
  const labels = ["0-5", "5-20", "20+"];

  // Find nearest valid stop for logic processing
  const snapValue = stops.reduce((prev, curr) =>
    Math.abs(curr - selectedRange) < Math.abs(prev - selectedRange) ? curr : prev
  );
  
  // The selected index corresponds to the snapped value
  const selectedIndex = stops.indexOf(snapValue);

  // Calculate percentage used for thumb and background track mapping
  const pct = selectedRange;
  const thumbOffset = 11 - (pct * 0.22);
  const bubbleLeft = `calc(${pct}% + ${thumbOffset}px)`;
  
  const sliderBackground = `linear-gradient(to right, #4361ee 0%, #4361ee ${pct}%, #f1f5f9 ${pct}%, #f1f5f9 100%)`;

  const handleDragEnd = () => {
    setSelectedRange(snapValue);
  };

  return (
    <section className="pt-[70px] px-5 pb-6">
      <h1 className="text-center text-[28px] sm:text-[32px] font-[800] tracking-tight text-[#111827] mb-[50px]">
        How Many Google Business Profiles Do You Manage?
      </h1>
      
      {/* Main Container - Matches max width of Pricing Cards to left-align the toggle correctly */}
      <div className="max-w-[1024px] lg:max-w-[1200px] mx-auto relative pt-4 pb-[30px] flex flex-col items-center">
        
        {/* Main Centered Slider limited to 580px width to match proportion in image */}
        <div className="w-full max-w-[580px] relative mb-4">
          {/* Tooltip Bubble */}
          <div className="relative mb-3 h-[32px]">
            <div 
              id="bubble" 
              className="bg-[#0f172a] text-white rounded-[6px] py-[4px] px-[9px] text-[13px] font-bold absolute -translate-x-1/2 pointer-events-none transition-[left] duration-75 ease-out flex flex-col items-center justify-center shadow-md z-20"
              style={{ left: bubbleLeft, bottom: '2px' }}
            >
              {labels[selectedIndex]}
              {/* Downward pointing triangle for bubble */}
              <div className="absolute -bottom-[4.5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#0f172a]"></div>
            </div>
          </div>
          
          <div className="relative">
            {/* Background line/track and markers - Placed using exact stop % */}
            <div className="absolute w-[calc(100%-20px)] left-[10px] top-1/2 -translate-y-1/2 block pointer-events-none z-0">
              {stops.map((stopPct, idx) => (
                <div 
                  key={idx} 
                  className={`absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full inline-block bg-white border border-[#e2e8f0] z-0 ${stopPct <= selectedRange ? 'border-transparent bg-transparent' : ''}`} 
                  style={{ left: `calc(${stopPct}%)`, transform: 'translate(-50%, -50%)' }}
                />
              ))}
            </div>

            <input
              type="range"
              id="profileSlider"
              min="0"
              max="100"
              value={selectedRange}
              step="1"
              onChange={(e) => setSelectedRange(parseInt(e.target.value, 10))}
              onMouseUp={handleDragEnd}
              onTouchEnd={handleDragEnd}
              className="relative z-10 w-full h-[8px] appearance-none rounded-full cursor-pointer outline-none"
              style={{ 
                background: sliderBackground, 
                WebkitAppearance: 'none',
              }}
            />
          </div>

          {/* Texts Placed at Exact Percentages to align under markers */}
          <div className="relative h-6 mt-[22px] w-[calc(100%-20px)] left-[10px]">
            {stops.map((stopPct, idx) => (
              <span 
                key={idx}
                className={`absolute top-0 text-[12px] font-semibold -translate-x-1/2 pointer-events-none transition-colors duration-200 ${selectedIndex === idx ? "text-[#1e293b]" : "text-[#94a3b8]"}`}
                style={{ left: `${stopPct}%` }}
              >
                {labels[idx]}
              </span>
            ))}
          </div>
        </div>
        
        {/* Toggle - Positioned flex-start to exactly align with left column of cards grid */}
        <div className="absolute bottom-[10px] left-0 flex items-center gap-[14px]">
          <label className="relative w-[46px] h-[26px]">
            <input
              type="checkbox"
              className="peer hidden"
              id="yearlyToggle"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <div className="absolute inset-0 bg-[#e2e8f0] rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-[#4361ee] shadow-inner"></div>
            <div className="absolute top-[3px] left-[3px] w-[20px] h-[20px] bg-white rounded-full transition-all duration-300 pointer-events-none peer-checked:translate-x-[20px] shadow-sm"></div>
          </label>
          <span className="font-[700] text-[14px] text-[#0f172a]">Pay yearly</span>
         
        </div>

      </div>
    </section>
  );
}
