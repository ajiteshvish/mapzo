import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Monthly and Yearly Plans
const pricingPlans = [
  {
    id: 1,
    name: 'MB Bronze',
    period: 'Monthly',
    price: 600,
    priceLabel: '₹600 / Month',
    color: 'from-pink-500 to-pink-600',
    features: [
      'Magic QR',
      'Feedback Collection',
      'Review Invites',
      'Free Website',
      'Connect Custom Domains',
      'E-commerce Setting',
      'SEO Tools',
      'Banners',
      'Audit Report',
      'Performance',
      'AI Business Description',
      'AI Agent',
      'Profile Optimizer',
      'Auto Review Reply',
      'Media / Post Publishing',
      'Content Scheduler',
      'Media / Post Bulk Import',
      'AI Credits',
      'Keyword Ranking Tracker',
      'Citation Feature',
      'Support',
    ],
  },
  {
    id: 2,
    name: 'MB Bronze',
    period: 'Yearly',
    price: 2399,
    priceLabel: '₹2399 / Year',
    color: 'from-pink-500 to-pink-600',
    features: [
      'Google My Business Profile',
      'GMB Audit Report',
      'Magic QR',
      'Performance',
      'Feedback Collection',
      'QR Code Download',
      'Auto Review Reply',
      'Post Scheduler',
      'Media Scheduler',
      'FREE Website',
    ],
  },
  {
    id: 3,
    name: 'MB Silver',
    period: 'Yearly',
    price: 5999,
    priceLabel: '₹5999 / Year',
    color: 'from-blue-600 to-blue-700',
    features: [
      'Google My Business Profile',
      'GMB Audit Report',
      'Magic QR',
      'Performance',
      'Feedback Collection',
      'QR Code Download',
      'Auto Review Reply',
      'Post Scheduler',
      'Media Scheduler',
      'FREE Website',
      'Keyword Ranking',
      'GMB Profile Optimization',
      'AI Business Description',
      'AI Assistant',
      'AI Agent',
      'Review Invites',
      'AI Credits',
      'Custom Domains',
      'Bulk Import Post Schedule',
    ],
  },
  {
    id: 4,
    name: 'MB Gold',
    period: 'Yearly',
    price: 24000,
    priceLabel: '₹24000 / Year',
    color: 'from-purple-600 to-purple-700',
    features: [
      'Google My Business Profile',
      'GMB Audit Report',
      'Magic QR',
      'Performance',
      'Feedback Collection',
      'QR Code Download',
      'Auto Review Reply',
      'Post Scheduler',
      'Media Scheduler',
      'FREE Website',
      'Keyword Ranking',
      'GMB Profile Optimization',
      'AI Business Description',
      'AI Assistant',
      'AI Agent',
      'Review Invites',
      'AI Credits',
      'Custom Domains',
      'Bulk Import Post Schedule',
      'API Access',
      'Team Collaboration',
    ],
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm opacity-90">({plan.period})</p>
              </div>

              {/* Pricing */}
              <div className="p-6 text-center border-b">
                <div className="text-3xl font-bold text-foreground">
                  {plan.priceLabel}
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 flex-1 overflow-y-auto max-h-96">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buy Button */}
              <div className="p-6 pt-0">
                <Button
                  variant="default"
                  size="lg"
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity text-white`}
                  asChild
                >
                  <a href="https://login.mapzoai.com/">Buy Now</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-soft-blue/10 to-light-purple/10 rounded-2xl p-8 border border-soft-blue/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to grow your business with AI?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using Mapzo AI to automate their local SEO and grow their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://login.mapzoai.com/">Start Free Trial</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6ao8MXwubcMeoWlHzb-mTNVf4id50Dq7xXBW3YqQkauJ9RA/viewform">Book Demo</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
