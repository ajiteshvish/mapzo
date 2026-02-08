import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Products } from '@/components/landing/Products';
import { PainPoints } from '@/components/landing/PainPoints';
import { HowItWorks } from '@/components/landing/HowItWorks';


import { WebsiteBuilder } from '@/components/landing/WebsiteBuilder';
import { Pricing } from '@/components/landing/Pricing';

import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ChatbotTrigger } from '@/components/ui/ai-chatbot';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';

const Index = () => {
  const sections = [
    'hero',
    'pain-points',
    'how-it-works',
    'features',

    'website-builder',
    'testimonials',
    'pricing',
    'faq'
  ];

  // Enable keyboard navigation
  useKeyboardNavigation({ sections });

  return (
    <>
      <Helmet>
        <title>Mapzo AI - #1 Local SEO Software & GMB Management Tool</title>
        <meta
          name="description"
          content="Automate your local growth with Mapzo AI. The top-rated Google Business Profile management tool and AI local SEO software for small businesses. Try for free."
        />
        <meta name="keywords" content="local seo software, google business profile management tool, ai local seo, gmb optimization tool, google maps ranking software, local seo automation" />
        <link rel="canonical" href="https://mapzoai.com" />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="https://mapzoai.com/site.png" />
        <meta name="twitter:image" content="https://mapzoai.com/site.png" />

        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Mapzo AI - #1 Local SEO Software & GMB Management Tool" />
        <meta property="og:description" content="Automate your local growth with Mapzo AI. The top-rated Google Business Profile management tool and AI local SEO software." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mapzoai.com" />
        <meta property="og:site_name" content="Mapzo AI" />
        <meta property="og:locale" content="en_US" />

        {/* Enhanced Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mapzo AI - #1 Local SEO Software & GMB Management Tool" />
        <meta name="twitter:description" content="Automate your local growth with Mapzo AI. The top-rated Google Business Profile management tool and AI local SEO software." />
        <meta name="twitter:site" content="@mapzoai" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Mapzo AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mapzo AI",
            "url": "https://mapzoai.com",
            "logo": "https://mapzoai.com/logo.png",
            "description": "AI-powered Local SEO Software & Google Business Profile Management Tool.",
            "foundingDate": "2024",
            "sameAs": [
              "https://twitter.com/mapzoai",
              "https://linkedin.com/company/mapzoai"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+917771880677",
              "contactType": "sales",
              "email": "support@mapzoai.com"
            }
          })}
        </script>

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mapzo AI",
            "url": "https://mapzoai.com",
            "description": "AI Local SEO Software & GMB Management Tool",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mapzoai.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Mapzo AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "AI-powered Local SEO Manager that automatically improves your Google Business Profile, rankings, reviews, posts, and website.",
            "url": "https://mapzoai.com",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free trial available"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127"
            }
          })}
        </script>

        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best local SEO software for small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mapzo AI is rated the #1 local SEO software for small businesses because it automates the entire process. Unlike complex tools like Semrush or Moz that require expert knowledge, Mapzo AI acts as your dedicated GMB manager."
                }
              },
              {
                "@type": "Question",
                "name": "How does AI improve Google Business Profile management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI Google Business Profile management allows for 24/7 optimization. Mapzo AI monitors your rankings in real-time, instantly replies to customer reviews, and schedules posts with high-ranking local keywords."
                }
              },
              {
                "@type": "Question",
                "name": "Can Mapzo AI help remove negative Google reviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mapzo AI helps suppress negative reviews using our \"Magic QR\" system, creating a private feedback loop where unhappy customers are directed to a private form instead of public Google pages."
                }
              },
              {
                "@type": "Question",
                "name": "How to rank higher on Google Maps automatically?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mapzo AI automates critical ranking factors: 1) Frequent GMB Posts with keywords, 2) Fast review responses, and 3) Consistent NAP data to steadily climb your rankings."
                }
              },
              {
                "@type": "Question",
                "name": "Does this tool work for multi-location agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Mapzo AI is an enterprise-grade GMB management tool perfect for agencies and franchises. You can manage hundreds of locations from a single dashboard, bulk schedule posts, and view aggregate performance reports."
                }
              },
              {
                "@type": "Question",
                "name": "Is Mapzo AI safe for my GMB account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Mapzo AI is 100% compliant with Google's guidelines. We use the official Google Business Profile API to manage your data securely and do not use \"black hat\" tactics."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between local SEO and general SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "General SEO focuses on global website rankings, while Local SEO targeting \"near me\" searches and Google Maps visibility. Mapzo AI specializes in Local SEO to rank you in the \"Map Pack\"."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a website to use Mapzo AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Mapzo AI can be your primary digital presence. Our platform includes a built-in AI website builder that instantly generates a high-speed, SEO-optimized landing page based on your Business Profile data."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <FloatingActionButton />
        <ChatbotTrigger />
        <section id="hero" className="scroll-mt-32">
          <Hero />
        </section>
        <section id="products" className="scroll-mt-32">
          <Products />
        </section>
        <section id="pain-points" className="scroll-mt-32">
          <PainPoints />
        </section>
        <section id="how-it-works" className="scroll-mt-32">
          <HowItWorks />
        </section>


        <section id="website-builder" className="scroll-mt-32">
          <WebsiteBuilder />
        </section>
        <section id="testimonials" className="scroll-mt-32">
          <Testimonials />
        </section>
        <section id="pricing" className="scroll-mt-32">
          <Pricing />
        </section>

        <section id="faq" className="scroll-mt-32">
          <FAQ />
        </section>
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;