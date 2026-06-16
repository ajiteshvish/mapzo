import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { blogPosts } from '@/data/blogPosts';

const CATEGORIES = ['All', 'Local SEO', 'GMB Management', 'Customer Reviews', 'AI Automation'] as const;

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog & Local SEO Insights - Mapzo AI</title>
        <meta
          name="description"
          content="Read the latest articles, strategies, guides, and tips on Google Business Profile management, local maps ranking, and SEO automation."
        />
        <meta name="keywords" content="local seo blog, gmb tips, google maps marketing, review management guide, mapzo ai updates" />
        <link rel="canonical" href="https://mapzoai.com/blog" />
      </Helmet>

      <ScrollProgress />
      <main className="min-h-screen bg-background flex flex-col">
        <Header />
        <FloatingActionButton />

        {/* Hero Header */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50 border-b border-gray-100">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-purple-light/20 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-light/20 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />

          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-4 tracking-wider uppercase"
            >
              Resources & Articles
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
            >
              The Mapzo AI <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Master Google Maps rankings, automate review cycles, and scale your offline business using AI.
            </motion.p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-white sticky top-[72px] z-20 shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all"
                />
              </div>

              {/* Category tabs */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white shadow-soft'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Post Grid Section */}
        <section className="py-16 bg-neutral-50 flex-grow">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatePresence mode="wait">
              {filteredPosts.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Post Image & Category */}
                      <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden aspect-[16/10] bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900 shadow-soft">
                            {post.category}
                          </span>
                        </div>
                      </Link>

                      {/* Post Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta details */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3 leading-snug line-clamp-2">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        {/* Card Footer / Author */}
                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="text-xs font-semibold text-gray-900">
                                {post.author.name}
                              </h4>
                              <p className="text-[10px] text-gray-500">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                          <Link
                            to={`/blog/${post.slug}`}
                            className="w-8 h-8 rounded-full bg-purple-50 group-hover:bg-purple-600 flex items-center justify-center text-purple-600 group-hover:text-white transition-all duration-300"
                            aria-label={`Read ${post.title}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-center py-24 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Articles Found</h3>
                  <p className="text-gray-500">
                    We couldn't find any articles matching your search query. Try switching categories or using other search keywords.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all shadow-soft"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(109,40,217,0.3),transparent_60%)]" />
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Boost Your Local Visibility Today
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Start optimizing your Google Business Profile automatically. Collect more positive reviews and suppress negative feedback in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://login.mapzoai.com/"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-purple-950 rounded-full text-base font-bold transition-all shadow-lg hover:-translate-y-0.5"
              >
                Try Mapzo AI Free
              </a>
              <Link
                to="/book-demo"
                className="w-full sm:w-auto px-8 py-4 border border-purple-300 hover:border-white text-white hover:bg-white/10 rounded-full text-base font-bold transition-all"
              >
                Book a Live Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
