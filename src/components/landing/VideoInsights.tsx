import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const videos = [
  {
    id: '1',
    youtubeId: 't-ERA4R26Wg',
    title: 'How to Train AI Agent for GMB Automation (Step-by-Step) | Mapzo AI',
    description: 'Learn how to set up the AI properly so it can automate your Google Business Profile tasks like reviews, posts, and customer engagement.',
  },
  {
    id: '2',
    youtubeId: 'YPG7T3Cd464',
    title: 'AI Bulk Posts + Scheduling (Up to 1 Year) | Mapzo AI',
    description: 'Mapzo AI helps you generate GMB posts in bulk and schedule them automatically for future dates 🚀',
  },
  {
    id: '3',
    youtubeId: 'VbODSdA6aHs',
    title: 'Magic QR System: Review QR + Negative Filter + AI Generator',
    description: 'Get more 5-star reviews, filter negative feedback before it becomes public, and automate responses using AI 🚀',
  },
  {
    id: '4',
    youtubeId: 'aj0byNjxEio',
    title: 'Instant AI Website from GMB (Auto Updated) | Mapzo AI',
    description: 'See how Mapzo AI instantly creates a fully functional 5-page website when you connect your Google Business Profile 🚀',
  },
  {
    id: '5',
    youtubeId: '45yTSHNqd7g',
    title: 'Optimize Your Google Business Profile with AI',
    description: 'Optimize your Google Business Profile with smart AI suggestions. No more guessing — AI tells you exactly what to improve.',
  },
  {
    id: '6',
    youtubeId: 'AOtteFf22uY',
    title: 'Auto Geo Tagging for Images (GMB SEO Boost)',
    description: 'Boost your local ranking by adding location data to your images automatically. Works seamlessly with scheduled posts to enhance SEO.',
  },
  {
    id: '7',
    youtubeId: 'qZe7woWXIG0',
    title: 'Auto Review Replies with Customer Name (Smart AI)',
    description: 'Mapzo AI automatically replies to every customer review with personalized, sentiment-based responses instantly 🚀',
  },
  {
    id: '8',
    youtubeId: '7ItUo7JrYgM',
    title: 'GMB Audit Report – Check Score & Improve Ranking',
    description: 'Analyze your Google Business Profile and improve your ranking. Get a complete score out of 100 and clear insights on what’s missing.',
  },
  {
    id: '9',
    youtubeId: 'IuOAeEbwNy0',
    title: 'Rank Tracking & Competitor Analysis (GMB SEO)',
    description: 'Track your Google Map rankings and analyze competitors to improve your local SEO performance and understand where you stand.',
  },
  {
    id: '10',
    youtubeId: 'RGatciPR2rM',
    title: 'Citation Builder & Tracker (550+ Sites) | Mapzo AI',
    description: 'Build and track local citations across 550+ platforms 🚀 No API or automation — full control with smart tracking.',
  },
];

// Doubling videos for seamless loop
const allVideos = [...videos, ...videos];

export function VideoInsights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // Pixels per frame

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start for seamless loop when reaching halfway
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Drive Performance Through Advanced <br className="hidden md:block" />
            <span className="text-blue-600">Local Search Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Stay ahead of the competition with our curated video guides and expert local SEO strategies.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 scrollbar-hide px-4 -mx-4 md:px-0 md:mx-0 select-none cursor-default"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {allVideos.map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="shrink-0 w-[320px] md:w-[420px] bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Video Embed */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                    <div className="shrink-0 p-2 bg-white rounded-full shadow-sm">
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                  <p className="text-slate-600 line-clamp-3 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${!isPaused ? 'w-8 bg-blue-600' : 'w-4 bg-slate-300'}`} />
            <div className={`h-1.5 w-4 rounded-full transition-all duration-300 ${isPaused ? 'bg-blue-600' : 'bg-slate-200'}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
