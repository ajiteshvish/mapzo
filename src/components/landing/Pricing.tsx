import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allFeatures = [
  'QR Code + Web Link',
  'Mini Business Website (Multi-Link Page)',
  'Admin Panel Access',
  'Google Review Popup',
  'Negative Review Protection',
  'AI Review Generator',
  'Google My Business (GMB) Connect',
  'GMB Audit Report',
  'Keywords & Profile Optimization',
  'AI Auto Reply to Reviews',
  'AI Agent Training',
  'Post Scheduler',
  'Keyword Ranking Tracking',
  'Performance Analytics',
  'Website + Custom Domain(extra)',
  'Done-For-You Setup',
  'Citation Management',
  'QR PDF Download',
  'Soft Copy Delivery',
];

const pricingPlans = [
  {
    id: 1,
    name: 'Magic QR (Basic)',
    period: 'Yearly',
    priceLabel: '₹499 / Year',
    color: 'from-pink-500 to-pink-600',
    includedFeatures: [0, 1, 2, 3, 4, 17, 18], // Indices of allFeatures
    buyUrl: 'https://pages.razorpay.com/pl_SA6HqorhgFdODJ/view/', // TODO: Add Razorpay link
  },
  {
    id: 2,
    name: 'Magic QR + AI',
    period: 'Yearly',
    priceLabel: '₹899 / Year',
    color: 'from-orange-500 to-orange-600',
    includedFeatures: [0, 1, 2, 3, 4, 5, 17, 18],
    buyUrl: 'https://pages.razorpay.com/pl_SA6TwrgbT5qYv4/view', // TODO: Add Razorpay link
  },
  {
    id: 3,
    name: 'Starter (9rs / day)',
    period: 'Yearly',
    priceLabel: '₹3,285 / Year',
    color: 'from-blue-600 to-blue-700',
    includedFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18],
    buyUrl: 'https://rzp.io/rzp/i40sZaRo',
  },
  {
    id: 4,
    name: 'Growth (19rs / day)',
    period: 'Yearly',
    priceLabel: '₹6,935 / Year',
    color: 'from-indigo-600 to-indigo-700',
    includedFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18],
    specialFeatures: { 12: 'Top 5' },
    buyUrl: 'https://rzp.io/rzp/BsNnCk4',
  },
  {
    id: 5,
    name: 'Pro (29rs / day)',
    period: 'Yearly',
    priceLabel: '₹10,585 / Year',
    color: 'from-purple-600 to-purple-700',
    includedFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    specialFeatures: { 12: 'Top 10' },
    buyUrl: 'https://rzp.io/rzp/tifmfKJ7',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-light/20 to-purple-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plans & <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
            >
              {/* Plan Header */}
              <div className={`bg-gradient-to-r ${plan.color} text-white p-6 text-center`}>
                <h3 className="text-xl font-bold mb-1 leading-tight h-12 flex items-center justify-center">{plan.name}</h3>
                <p className="text-xs opacity-90">({plan.period})</p>
              </div>

              {/* Pricing */}
              <div className="p-4 text-center border-b">
                <div className="text-2xl font-bold text-foreground">
                  {plan.priceLabel}
                </div>
              </div>

              {/* Features List */}
              <div className="p-4 flex-1 overflow-y-auto max-h-[500px]">
                <ul className="space-y-2">
                  {allFeatures.map((feature, idx) => {
                    const isIncluded = plan.includedFeatures.includes(idx);
                    const specialValue = (plan as any).specialFeatures?.[idx];

                    return (
                      <li key={idx} className={`flex items-start gap-2 text-xs ${isIncluded ? 'opacity-100' : 'opacity-40'}`}>
                        {isIncluded ? (
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        )}
                        <span className={isIncluded ? 'text-foreground font-medium' : 'text-muted-foreground font-normal'}>
                          {feature} {specialValue && <span className="text-blue-600 font-bold ml-1">({specialValue})</span>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Buy Button */}
              <div className="p-4 pt-0">
                <Button
                  variant="default"
                  size="sm"
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity text-white font-bold h-10`}
                  asChild
                >
                  <a href={plan.buyUrl}>Buy Now</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
