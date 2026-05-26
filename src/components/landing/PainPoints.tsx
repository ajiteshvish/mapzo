import { motion } from 'framer-motion';
import {
  Puzzle,
  FileWarning,
  Search,
  CalendarX,
  MessageSquareX,
  DollarSign,
  Eye,
  Lock
} from 'lucide-react';

const painPoints = [
  {
    icon: Puzzle,
    title: 'Complicated tools',
    description: 'Too many platforms, dashboards, and settings to manage.',
  },
  {
    icon: FileWarning,
    title: 'Incomplete profiles',
    description: 'Google Business Profiles missing critical local SEO information.',
  },
  {
    icon: Search,
    title: 'No Local SEO strategy',
    description: 'Guessing what local customers are searching for on Maps.',
  },
  {
    icon: CalendarX,
    title: 'Irregular posting',
    description: 'Weeks go by without any updates or engagement.',
  },
  {
    icon: MessageSquareX,
    title: 'Unmanaged reviews',
    description: 'Reviews pile up with no responses or strategy.',
  },
  {
    icon: DollarSign,
    title: 'Expensive websites',
    description: 'Paying too much for sites that don\'t perform.',
  },
  {
    icon: Eye,
    title: 'No visibility',
    description: 'No idea how you rank or what\'s working.',
  },
];

function GoogleGIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-16 md:h-16" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.203 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.953 3.047l5.657-5.657C34.046 6.053 29.28 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.307 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.953 3.047l5.657-5.657C34.046 6.053 29.28 4 24 4c-7.682 0-14.338 4.337-17.693 10.691z" />
      <path fill="#4CAF50" d="M24 44c5.178 0 9.862-1.977 13.409-5.193l-6.19-5.238C29.151 35.091 26.715 36 24 36c-5.184 0-9.624-3.327-11.283-7.946l-6.522 5.024C9.515 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.05 12.05 0 0 1-4.084 5.569l.003-.002 6.19 5.238C36.971 39.204 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

export function PainPoints() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neutral-50 to-blue-light/10">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3">
              <div className="w-7 h-7 rounded-md bg-amber-100 flex items-center justify-center">
                <Lock className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                Mapzo AI is <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Enterprise & Agency Ready</span>
              </h3>
            </div>
            <p className="mt-4 text-base md:text-xl text-slate-500">
              Security and compliance built-in from day one. Your clients&apos; data is always protected.
            </p>
            <div className="mt-8 rounded-[28px] border-2 border-blue-200 bg-white shadow-[0_8px_30px_rgba(37,99,235,0.08)] px-6 py-6 md:px-12 md:py-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 md:gap-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                <GoogleGIcon />
                <span>Build with Official Google API</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why local businesses{' '}
            <span className="gradient-text">struggle online</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It's not your fault. Local SEO is complex, time-consuming, and constantly changing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full card-soft p-8 hover-lift group-hover:border-red-200 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors border border-red-100">
                  <point.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
