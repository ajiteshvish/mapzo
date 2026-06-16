import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Linkedin, X, Youtube, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const USFlagIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 14" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="20" height="14" fill="#b22234" />
    <rect y="1.08" width="20" height="1.08" fill="#fff" />
    <rect y="3.23" width="20" height="1.08" fill="#fff" />
    <rect y="5.38" width="20" height="1.08" fill="#fff" />
    <rect y="7.54" width="20" height="1.08" fill="#fff" />
    <rect y="9.69" width="20" height="1.08" fill="#fff" />
    <rect y="11.85" width="20" height="1.08" fill="#fff" />
    <rect width="8.8" height="7.54" fill="#3c3b6e" />
  </svg>
);

const IndiaFlagIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 14" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="20" height="4.67" fill="#ff9933" />
    <rect y="4.67" width="20" height="4.67" fill="#fff" />
    <rect y="9.34" width="20" height="4.66" fill="#128807" />
    <circle cx="10" cy="7" r="1.1" fill="#000080" />
  </svg>
);

const footerSections = {
  about: {
    title: 'ABOUT US',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Features', href: '/#how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
    ]
  },
  features: {
    title: 'FEATURES',
    links: [
      { label: 'Google Business Profile Optimization', href: 'https://login.mapzoai.com/' },
      { label: 'AI Local SEO Audit & Score', href: 'https://login.mapzoai.com/' },
      { label: 'Review Management', href: 'https://login.mapzoai.com/' },
      { label: 'AI Post Scheduling', href: 'https://login.mapzoai.com/' },
      { label: 'AI Website Builder', href: 'https://login.mapzoai.com/' },
      { label: 'Ranking & Performance Tracking', href: 'https://login.mapzoai.com/' },
      { label: 'Multi-Location Management', href: 'https://login.mapzoai.com/' },
    ]
  },
  legal: {
    title: 'LEGAL',
    links: [
      { label: 'Terms & Conditions', href: '/about#terms' },
      { label: 'Privacy Policy', href: '/about#privacy' },
      { label: 'Refund / Cancellation Policy', href: '/about#refund' },
    ]
  },
  social: {
    title: 'SOCIAL',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mapzoai/', icon: Linkedin },
      { label: 'X', href: '#twitter', icon: X },
      { label: 'YouTube', href: '#youtube', icon: Youtube },
      { label: 'Facebook', href: 'https://www.facebook.com/share/1AMrfjNNov/', icon: Facebook },
      { label: 'Instagram', href: 'https://www.instagram.com/mapzo.ai/', icon: Instagram },
      { label: 'WhatsApp', href: 'https://wa.me/7771808677', icon: WhatsAppIcon },
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {/* Mapzo AI Logo */}
              <div className="mb-6">
                <img
                  src="/image.png"
                  alt="Mapzo AI"
                  className="h-8 w-auto hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>

              {/* Address */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">INDIA</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  F-1, C-09, KLIC, Bhopal,<br />
                  Madhya Pradesh,<br />
                  462023, India
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <USFlagIcon className="w-4 h-3 rounded-[1px] shrink-0" />
                    +18382222758
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <IndiaFlagIcon className="w-4 h-3 rounded-[1px] shrink-0" />
                    +919403892801
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">support@mapzoai.com</span>
                </div>
              </div>
            </motion.div>
          </div>





          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.about.title}</h4>
            <ul className="space-y-3">
              {footerSections.about.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.features.title}</h4>
            <ul className="space-y-3">
              {footerSections.features.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.social.title}</h4>
            <div className="flex gap-4">
              {footerSections.social.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-muted-foreground hover:bg-soft-blue hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.legal.title}</h4>
            <ul className="space-y-3">
              {footerSections.legal.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center relative pt-8 border-t border-neutral-200"
        >
          <div className="w-full flex justify-center order-2 md:order-1">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Mapzo AI All Rights Reserved
            </p>
          </div>


        </motion.div>
      </div>
    </footer>
  );
}