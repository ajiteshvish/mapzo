import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Star, Check, Globe, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedDashboard } from '@/components/ui/animated-dashboard';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-white/40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badges Container */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              {/* AI Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium"
              >
                <Star className="w-3.5 h-3.5 fill-blue-600" />
                AI-Powered Local SEO
              </motion.div>

              {/* Google API Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                Powered by Official Google Business Profile API
              </motion.div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900 tracking-tight">
              AI Local SEO Manager that helps you <span className="text-blue-600">rank higher</span>, automatically
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Mapzo AI understands your business and manages your complete local SEO—Google Business Profile, reviews, posts, and website—without any manual work.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" className="glow group" asChild>
                <a href="https://login.mapzoai.com/">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/book-demo">
                  <Play className="w-4 h-4 mr-2" />
                  Book Demo
                </Link>
              </Button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                No learning curve
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <Globe className="w-3 h-3 text-blue-600" />
                </div>
                Works globally
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-blue-600" />
                </div>
                Secure and compliant
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'backOut' }}
            className="relative lg:-mr-10 xl:-mr-20"
          >
            <AnimatedDashboard variant="analytics" className="max-w-lg mx-auto xl:max-w-xl transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-700" />
            
            {/* Subtle floating glow behind dashboard */}
            <div className="absolute -inset-4 bg-blue-400/10 rounded-[2rem] blur-2xl -z-10 animate-pulse-soft" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
