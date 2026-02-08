import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the best local SEO software for small businesses?',
    answer: 'Mapzo AI is rated the #1 local SEO software for small businesses because it automates the entire process. Unlike complex tools like Semrush or Moz that require expert knowledge, Mapzo AI acts as your dedicated GMB manager. It automatically posts updates, responds to reviews using AI, and optimizes your profile to rank higher in the Google 3-Pack.'
  },
  {
    question: 'How does AI improve Google Business Profile management?',
    answer: 'AI Google Business Profile management allows for 24/7 optimization that is impossible for humans. Mapzo AI monitors your rankings in real-time, instantly replies to customer reviews to boost engagement signals, and schedules posts with high-ranking local keywords. This consistent activity signals to Google that your business is active and authoritative.'
  },
  {
    question: 'Can Mapzo AI help remove negative Google reviews?',
    answer: 'While no tool can directly "delete" Google reviews, Mapzo AI helps suppress them. Our "Magic QR" system creates a private feedback loop where unhappy customers are directed to a private form instead of public Google pages. This prevents negative reviews from reaching your profile while effectively growing your 5-star ratings.'
  },
  {
    question: 'Does this tool work for multi-location agencies?',
    answer: 'Yes, Mapzo AI is an enterprise-grade GMB management tool perfect for agencies and franchises. You can manage hundreds of locations from a single dashboard, bulk schedule posts, and view aggregate performance reports. It is the most efficient way to scale local SEO services for clients.'
  },
  {
    question: 'How to rank higher on Google Maps automatically?',
    answer: 'To rank higher on Google Maps, you need consistent activity. Mapzo AI automates the three most critical ranking factors: 1) Frequent GMB Posts with local keywords, 2) Fast, keyword-rich review responses, and 3) Consistent NAP (Name, Address, Phone) data. Our software handles these daily tasks to steadily climb your rankings.'
  },
  {
    question: 'Is Mapzo AI safe for my GMB account?',
    answer: 'Yes, Mapzo AI is 100% compliant with Google\'s guidelines. We use the official Google Business Profile API to manage your data securely. We do not use "black hat" tactics like buying reviews or fake engagement, ensuring your account remains safe while growing organically.'
  },
  {
    question: 'What is the difference between local SEO and general SEO?',
    answer: 'General SEO focuses on global website rankings, while Local SEO targeting "near me" searches and Google Maps visibility. Mapzo AI specializes in Local SEO, focusing specifically on ranking your Google Business Profile in the "Map Pack," which drives 70% of local business phone calls and visits.'
  },
  {
    question: 'Do I need a website to use Mapzo AI?',
    answer: 'No, you do not need an existing website. Mapzo AI can be your primary digital presence. In fact, our platform includes a built-in AI website builder that instantly generates a high-speed, SEO-optimized landing page based on your Google Business Profile data.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
