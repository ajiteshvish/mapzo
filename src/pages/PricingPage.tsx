import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { ChatbotTrigger } from '@/components/ui/ai-chatbot';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import PricingHero from "@/components/sections/PricingHero";
import PlanCards from "@/components/sections/PlanCards";
import FeatureTable from "@/components/sections/FeatureTable";
import PaymentMethods from "@/components/sections/PaymentMethods";
import TrustBadges from "@/components/sections/TrustBadges";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Faq from "@/components/sections/Faq";

const PricingPage = () => {
  const [selectedRange, setSelectedRange] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const stops = [0, 50, 100];
  const snapValue = stops.reduce((prev, curr) =>
    Math.abs(curr - selectedRange) < Math.abs(prev - selectedRange) ? curr : prev
  );
  const selectedPlanIndex = stops.indexOf(snapValue);

  return (
    <>
      <Helmet>
        <title>Pricing - Mapzo AI | Compare Plans & Start Your Experience</title>
        <meta
          name="description"
          content="Choose the right Mapzo AI plan for your business. Transparent pricing, powerful local SEO features, and a 30-day money-back guarantee."
        />
      </Helmet>
      
      <ScrollProgress />
      <Header />
      <FloatingActionButton />
      <ChatbotTrigger />
      <main className="min-h-screen bg-white">
        <div className="pt-16">
          <PricingHero
            selectedRange={selectedRange}
            setSelectedRange={setSelectedRange}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
          />
        <PlanCards selectedPlanIndex={selectedPlanIndex} isYearly={isYearly} />
        <FeatureTable
          selectedPlanIndex={selectedPlanIndex}
          isYearly={isYearly}
          setIsYearly={setIsYearly}
        />
        <PaymentMethods />
        <Faq />
        <TrustBadges />
        <Testimonials />
        <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
