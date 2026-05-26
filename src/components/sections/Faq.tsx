import { useState } from "react";

const faqData = [
  { question: "What payment options do you accept?", answer: "We keep things flexible with multiple ways to pay: all major debit & credit cards, direct bank transfers, Razorpay, Skydo, PayPal, Wise, etc." },
  { question: "What plans does Mapzo AI offer?", answer: "Mapzo AI offers three plans: Starter (for 0-5 Google Business Profiles), Growth (for 5-20 profiles), and Enterprise / White Label (for 20+ profiles with custom setup)." },
  { question: "How much does each plan cost?", answer: "Monthly pricing is based on profiles: Starter is $16 per GMB per month, Growth is $9 per GMB per month, and Enterprise / White Label is custom pricing based on your requirements." },
  { question: "Do you offer yearly billing discounts?", answer: "Yes. Yearly billing gives better pricing than monthly plans. For example, Starter is $12.8/GMB/month and Growth is $7.2/GMB/month on annual billing." },
  { question: "Can I switch between monthly and yearly billing?", answer: "Yes, you can switch billing cycles from your account billing settings. If you need help with migration or proration details, our team can assist you." },
  { question: "Can I upgrade or downgrade my plan later?", answer: "Absolutely. You can move from Starter to Growth, Growth to Enterprise, or downgrade based on your profile count and business needs." },
  { question: "Which plan is best for small businesses?", answer: "Starter is ideal for small businesses managing up to 5 Google Business Profiles and needing core automation like reviews, posts, optimization, and performance tracking." },
  { question: "Which plan is best for agencies and multi-location brands?", answer: "Growth is best for agencies and brands managing 5-20 profiles. It includes the same core features with better per-profile pricing for scaling operations." },
  { question: "When should I choose Enterprise / White Label?", answer: "Choose Enterprise / White Label when you manage 20+ profiles, need custom pricing, advanced scaling support, white-label workflows, or dedicated onboarding for larger teams." },
  { question: "What features are included in Mapzo AI plans?", answer: "Mapzo AI plans include key local SEO tools such as Magic QR, GMB audit report, review workflows, post/media scheduler, keyword ranking, AI assistant, AI business description, AI agent, and profile optimization tools." },
  { question: "Do all plans include the same core features?", answer: "Yes, core capabilities are available across plans. The main differences are profile capacity, per-profile pricing, and enterprise-level customization/support requirements." },
  { question: "How can I contact support?", answer: "You can reach the Mapzo AI team at support@mapzoai.com. We can help with plan selection, billing questions, onboarding, and account setup." },
  { question: "Will I receive invoices for payments?", answer: "Yes. Invoices are generated after successful payments and are available in your billing records." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="pt-[48px] pb-[120px] px-6 max-w-[940px] mx-auto">
        <h2 className="text-center text-[32px] md:text-[40px] font-[900] mb-12 text-[#1a1a1a]">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-[1.5px] border-[#eff3f9] rounded-[28px] overflow-hidden bg-white transition-all duration-300 hover:shadow-[0_10px_30px_rgba(78,84,225,0.08)] hover:border-[#dee6f2] ${isOpen ? 'shadow-md border-[#dfe7f3]' : 'shadow-none'}`}
              >
                <button 
                  className="w-full bg-transparent border-none text-left p-6 md:p-8 font-[700] text-[17px] cursor-pointer flex justify-between items-center text-[#1a1a1a]"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-8">{item.question}</span>
                  <svg 
                    className={`w-4 h-4 transform transition-transform duration-300 flex-shrink-0 text-[#1a1a1a] ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-[15px] text-[#4b5563] px-6 md:px-8 ${isOpen ? 'max-h-[400px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="max-w-[800px] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
