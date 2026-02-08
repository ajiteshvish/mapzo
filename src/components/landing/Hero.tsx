import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { AnimatedDashboard } from '@/components/ui/animated-dashboard';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-light/30 to-purple-light/30">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-light/20 to-purple-light/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soft-blue/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-light-purple/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground">
              Boost Your Google Ranking for just {' '}
              <span className="gradient-text"> ₹9/day</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Mapzo AI is an AI-powered SaaS platform that helps local businesses grow on Google.<br/>
Our software automates local SEO, content posting, and review management—driving more calls, more reviews, and more customers—all on autopilot.<br/>

Start at just ₹9/day and see real results for your business. Book your demo today!           </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button variant="hero" size="lg" className="shadow-lg hover-lift" asChild>
                <a href="https://login.mapzoai.com/">Get Started</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="hover-lift" asChild>
                <Link to="/book-demo">
                  <Play className="w-5 h-5" />
                  Book Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* <AnimatedDashboard variant="analytics" className="max-w-lg mx-auto" /> */}
            <img
              src="/hero-image-v3.jpg"
              alt="Mapzo AI - Rank #1 on Google"
              className=" rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
