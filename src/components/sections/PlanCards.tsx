type PlanCardsProps = {
  selectedPlanIndex: number;
  isYearly: boolean;
};

type Plan = {
  title: string;
  subtitle: string;
  monthlyPrice: string;
  yearlyPrice: string;
  ctaText: string;
  ctaLink?: string;
  helperText: string;
  features: string[];
};

const plans: Plan[] = [
  {
    title: "Starter",
    subtitle: "For 0-5 GMB profiles",
    monthlyPrice: "$16 / GMB / Month",
    yearlyPrice: "$12.8 / GMB / Month",
    ctaText: "Start Now",
    ctaLink: "https://login.mapzoai.com/",
    helperText: "Best for individual businesses",
    features: [
      "GMB Automation",
      "Review Reply Automation",
      "Post Scheduling + Geo Tagging",
      "Basic Optimization",
      "👉 Best for individual businesses",
    ],
  },
  {
    title: "Growth",
    subtitle: "For 5-20 GMB profiles",
    monthlyPrice: "$9 / GMB / Month",
    yearlyPrice: "$7.2 / GMB / Month",
    ctaText: "Start Now",
    ctaLink: "https://login.mapzoai.com/",
    helperText: "Best for agencies & multi-location brands",
    features: [
      "Everything in Starter",
      "Multi-location Dashboard",
      "Bulk Management",
      "Faster Automation Processing",
      "👉 Best for agencies & multi-location brands",
    ],
  },
  {
    title: "Enterprise / White Label",
    subtitle: "For 20+ GMB profiles",
    monthlyPrice: "Custom Pricing (~$4 - $6 / GMB)",
    yearlyPrice: "Custom Discounted Deal (20%+ off)",
    ctaText: "Contact with our team",
    ctaLink: "#",
    helperText: "Built for large agencies & resellers",
    features: [
      "White Label Access",
      "Dedicated Support",
      "Advanced Automation + API",
      "Custom Setup & Scaling Support",
      "👉 Built for large agencies & resellers",
    ],
  },
];

export default function PlanCards({ selectedPlanIndex, isYearly }: PlanCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1024px] lg:max-w-[1140px] mx-auto mb-[60px] px-4 items-start">
      {plans.map((plan, index) => {
        const isFeatured = index === selectedPlanIndex;
        const priceLabel = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

        return (
          <div
            key={plan.title}
            className={`bg-white rounded-xl p-[28px] pb-6 relative shadow-sm ${
              isFeatured
                ? "border-2 border-blue !pt-0 z-10 overflow-hidden shadow-md md:-mt-3"
                : "border-[1.5px] border-border"
            }`}
          >
            {isFeatured && (
              <div className="bg-blue text-white text-center p-2 text-[13px] font-bold mb-5">
                Plan designed for you
              </div>
            )}
            <div className="text-[20px] font-extrabold mb-2 text-text">{plan.title}</div>
            <div className="text-[13px] font-black mb-5 min-h-[48px]">{plan.subtitle}</div>
            <div
              className={`${index === 2 ? "text-[28px] mt-4" : "text-[36px]"} font-black mb-[2px] text-text`}
            >
              {priceLabel}
            </div>
            <a
              href={plan.ctaLink ?? "#"}
              className="block w-full p-[13px] rounded-full font-bold text-[15px] cursor-pointer my-[26px] mb-2 transition-all duration-200 border-[1.5px] border-blue text-blue bg-transparent hover:bg-blue-light text-center no-underline"
            >
              {plan.ctaText}
            </a>
            <div className="text-center text-[12px] font-black mb-5 !mb-0">{plan.helperText}</div>
            <hr className="border-none border-t border-border my-2 mb-4" />
            <ul className="list-none">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[13.5px] mb-3 leading-[1.4] text-text">
                  <span className="text-blue text-[16px] flex-shrink-0 mt-[1px]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center text-[12px] text-muted mt-5">30-Day Money-Back Guarantee</div>
          </div>
        );
      })}
    </div>
  );
}
