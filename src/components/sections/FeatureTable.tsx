import React, { ReactNode, useEffect, useState } from "react";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue mx-auto" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2 2 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#cbd5e1] mx-auto" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

const QuestionIcon = () => (
  <span className="inline-flex items-center justify-center w-[15px] h-[15px] rounded-full border border-muted text-[10px] text-muted cursor-help flex-shrink-0 font-bold ml-1.5 relative top-[1px]">?</span>
);


type FeatureRow = {
  label: string;
  values: (string | boolean | ReactNode)[];
  hasTooltip: boolean;
  isUpdated?: boolean;
};

type FeatureCategory = {
  title: string;
  rows: FeatureRow[];
};

const featureData: FeatureCategory[] = [
  {
    title: "", 
    rows: [
      { label: "Price", values: [<b key="1">$16</b>, <b key="2">$9</b>, <b key="3">Custom Pricing</b>], hasTooltip: false },
      { label: "Google My Business Profiles", values: [true, true, true], hasTooltip: false },
      { label: "Magic QR", values: [true, true, true], hasTooltip: false },
      { label: "GMB Audit Report", values: [true, true, true], hasTooltip: false },
      { label: "Performance", values: [true, true, true], hasTooltip: false },
      { label: "Website", values: [true, true, true], hasTooltip: false },
      { label: "Custom Domains", values: [true, true, true], hasTooltip: false },
      { label: "Feedback Collection", values: [true, true, true], hasTooltip: false },
      { label: "QR Code Download", values: [true, true, true], hasTooltip: false },
      { label: "Auto Review Reply", values: [true, true, true], hasTooltip: false },
      { label: "Post Scheduler", values: [true, true, true], hasTooltip: false },
      { label: "Media Scheduler", values: [true, true, true], hasTooltip: false },
      { label: "Keyword Ranking", values: ["5", "50", "Custom"], hasTooltip: false },
      { label: "GMB Profile Optimization", values: [true, true, true], hasTooltip: false },
      { label: "AI Business Description", values: [true, true, true], hasTooltip: false },
      { label: "AI Assistant", values: [true, true, true], hasTooltip: false },
      { label: "AI Agent", values: [true, true, true], hasTooltip: false },
      { label: "Review Invites", values: [true, true, true], hasTooltip: false },
      { label: "Bulk Import Post Schedule", values: [true, true, true], hasTooltip: false },
    ]
  }
];

type FeatureTableProps = {
  selectedPlanIndex: number;
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
};

const tablePlans = [
  {
    name: "Starter",
    description: "For 0-5 GMB profiles",
    ctaText: "Start Now",
    ctaLink: "https://login.mapzoai.com/",
    monthlyPrice: "$16 / GMB / Month",
    yearlyPrice: "$12.8 / GMB / Month",
  },
  {
    name: "Growth",
    description: "For 5-20 GMB profiles",
    ctaText: "Start Now",
    ctaLink: "https://login.mapzoai.com/",
    monthlyPrice: "$9 / GMB / Month",
    yearlyPrice: "$7.2 / GMB / Month",
  },
  {
    name: "Enterprise/White Label",
    description: "For 20+ GMB profiles",
    ctaText: "Contact with our team",
    ctaLink: "#",
    monthlyPrice: "Custom Pricing (~$4 - $6 / GMB)",
    yearlyPrice: "Custom Discounted Deal (20%+ off)",
  },
];

export default function FeatureTable({ selectedPlanIndex, isYearly, setIsYearly }: FeatureTableProps) {
  const [mobilePlanIndex, setMobilePlanIndex] = useState(selectedPlanIndex);

  useEffect(() => {
    setMobilePlanIndex(selectedPlanIndex);
  }, [selectedPlanIndex]);

  const renderValue = (row: FeatureRow, value: string | boolean | ReactNode, valueIndex: number) => {
    if (row.label === "Price") {
      return (
        <span className="text-[13px] font-medium text-text">
          {isYearly ? tablePlans[valueIndex].yearlyPrice : tablePlans[valueIndex].monthlyPrice}
        </span>
      );
    }

    if (value === true) return <CheckIcon />;
    if (value === false) return <CrossIcon />;
    return <span className="text-[13px] font-medium text-text">{value}</span>;
  };

  return (
    <section className="bg-white py-[60px] px-5">
      <h2 className="text-center text-[30px] font-black mb-10 text-text hidden md:block">A complete list of available features</h2>

      <div className="max-w-[640px] mx-auto w-full md:hidden">
        <h3 className="text-center text-[34px] leading-[1.15] font-black text-text mb-6">
          A complete list of available features
        </h3>

        <div className="flex items-center justify-center gap-3 mb-5">
          <label className="relative w-11 h-[24px]">
            <input
              type="checkbox"
              className="peer hidden"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <div className="absolute inset-0 bg-[#e2e8f0] rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue"></div>
            <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full transition-all duration-300 pointer-events-none peer-checked:translate-x-[20px] shadow-sm"></div>
          </label>
          <span className="font-semibold text-[15px] text-text">Pay yearly</span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-1">
          {tablePlans.map((plan, idx) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setMobilePlanIndex(idx)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-[14px] font-semibold transition ${
                mobilePlanIndex === idx
                  ? "border-blue text-blue bg-blue-light/20"
                  : "border-border text-text bg-white"
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-border overflow-hidden">
          {featureData.map((category, catIdx) => (
            <React.Fragment key={catIdx}>
              {category.title && (
                <div className="bg-[#fafafa] border-b border-border px-4 py-3 text-[14px] font-bold text-text">
                  {category.title}
                </div>
              )}
              {category.rows.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 border-b border-border last:border-b-0">
                  <div className="text-[14px] text-[#475569] leading-[1.35] flex items-center">
                    {row.label}
                    {row.isUpdated && (
                      <span className="bg-[#eff6ff] text-blue text-[10px] font-bold py-[2px] px-[6px] rounded-md ml-2 tracking-wide border border-[#bfdbfe]">
                        Updated
                      </span>
                    )}
                    {row.hasTooltip && <QuestionIcon />}
                  </div>
                  <div className="text-right">{renderValue(row, row.values[mobilePlanIndex], mobilePlanIndex)}</div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto w-full overflow-x-auto lg:overflow-visible hidden md:block">
        <div className="min-w-[900px]">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="p-[20px] text-left text-[13px] font-bold border border-border align-middle w-[25%] bg-white sticky top-[72px] z-30 shadow-[0_1px_rgba(226,232,240,1)]">
                  <div className="flex items-center justify-start m-0 gap-3">
                    <label className="relative w-11 h-[24px]">
                      <input 
                        type="checkbox" 
                        className="peer hidden"
                        checked={isYearly}
                        onChange={(e) => setIsYearly(e.target.checked)}
                      />
                      <div className="absolute inset-0 bg-[#e2e8f0] rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue"></div>
                      <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full transition-all duration-300 pointer-events-none peer-checked:translate-x-[20px] shadow-sm"></div>
                    </label>
                    <span className="font-semibold text-[13px] text-text">Pay yearly</span>
                  </div>
                </th>
                
                {tablePlans.map((plan, planIdx) => (
                <th
                  key={plan.name}
                  className={`p-[24px_20px] text-center border border-border align-top w-[25%] sticky top-[72px] z-30 shadow-[0_1px_rgba(226,232,240,1)] ${
                    selectedPlanIndex === planIdx ? "bg-blue-light/20" : "bg-white"
                  } ${selectedPlanIndex === planIdx ? "pt-[30px] relative bg-clip-padding" : ""}`}
                >
                  {selectedPlanIndex === planIdx && (
                    <div className="absolute top-0 left-0 right-0 bg-blue text-white text-center py-[6px] text-[12px] font-bold">
                      Your pick
                    </div>
                  )}
                  <div className={`text-[17px] font-bold mb-[8px] text-text text-left ${selectedPlanIndex === planIdx ? "mt-2" : ""}`}>{plan.name}</div>
                  <div className="text-[12px] text-[#64748b] font-medium leading-[1.5] text-left mb-[18px]">{plan.description}</div>
                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-[10px] rounded-full font-bold text-[14px] cursor-pointer text-center no-underline border-[1.5px] transition ${
                      selectedPlanIndex === planIdx
                        ? "border-blue text-white bg-blue hover:bg-blue-dark shadow-sm"
                        : "border-blue text-blue bg-transparent hover:bg-blue-light/10"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureData.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  {category.title && (
                    <tr className="bg-[#fafafa]">
                      <td colSpan={4} className="font-bold text-[14px] p-[16px_20px] text-text border border-border">{category.title}</td>
                    </tr>
                  )}
                  {category.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="bg-white hover:bg-[#fafafa]/50 transition-colors">
                      <td className="p-[16px_20px] text-[13px] text-[#475569] align-middle border border-border">
                        <span className="flex items-center">
                          {row.label}
                          {row.isUpdated && (
                            <span className="bg-[#eff6ff] text-blue text-[10px] font-bold py-[2px] px-[6px] rounded-md ml-2 tracking-wide border border-[#bfdbfe]">Updated</span>
                          )}
                          {row.hasTooltip && <QuestionIcon />}
                        </span>
                      </td>
                      {row.values.map((val, valIdx) => (
                        <td
                          key={valIdx}
                          className={`p-[16px_20px] align-middle text-center border border-border ${
                            selectedPlanIndex === valIdx ? "bg-blue-light/10" : ""
                          }`}
                        >
                          {renderValue(row, val, valIdx)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
