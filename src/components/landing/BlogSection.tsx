import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

export function BlogSection() {
  // Take the first 3 posts for the home page showcase
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-light/20 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-light/20 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 mb-4 tracking-wider uppercase">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Resources for <span className="gradient-text">Local SEO & Growth</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Actionable guides, GMB optimization strategies, and marketing news to help your local business scale automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 transition-colors group"
            >
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </div>
    </section>
  );
}
