import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Link2, ChevronRight, Check } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find current post
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on load/slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Framer motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    // If post is not found, render an elegant 404 block
    return (
      <>
        <Header />
        <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-24">
          <div className="text-center p-8 bg-white rounded-3xl shadow-soft border border-gray-100 max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">
              The article you are looking for might have been moved or renamed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all shadow-soft"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Related posts (same category, or just excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <>
      <Helmet>
        <title>{post.title} - Mapzo AI Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-soft-blue to-light-purple z-[100] origin-left"
        style={{ scaleX }}
      />

      <ScrollProgress />
      <main className="min-h-screen bg-white flex flex-col">
        <Header />
        <FloatingActionButton />

        {/* Article Container */}
        <article className="pt-32 pb-24 flex-grow">
          {/* Breadcrumbs & Back Button */}
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl mb-8">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link to="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>

          {/* Header Metadata */}
          <header className="container mx-auto px-4 lg:px-8 max-w-4xl text-center md:text-left mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-gray-100">
              {/* Author Card */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover shadow-soft"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-gray-900">{post.author.name}</h4>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>

              {/* Publication details */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl mb-16">
            <div className="rounded-[32px] overflow-hidden aspect-[21/9] shadow-soft border border-gray-100 bg-slate-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content Layout */}
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content Prose */}
              <div className="flex-1 min-w-0">
                <div
                  className="prose prose-purple max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:font-semibold hover:prose-a:underline prose-li:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar Share Actions */}
              <aside className="lg:w-48 shrink-0">
                <div className="lg:sticky lg:top-36 bg-slate-50 border border-slate-100 rounded-3xl p-6 text-center">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Share Article</h4>
                  <div className="flex lg:flex-col justify-center gap-3">
                    {/* LinkedIn */}
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white hover:bg-purple-600 hover:text-white flex items-center justify-center text-gray-600 shadow-soft border border-gray-100 transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    {/* Twitter / X */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white hover:bg-purple-600 hover:text-white flex items-center justify-center text-gray-600 shadow-soft border border-gray-100 transition-all"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>

                    {/* Copy Link */}
                    <button
                      onClick={handleCopyLink}
                      className="w-10 h-10 rounded-full bg-white hover:bg-purple-600 hover:text-white flex items-center justify-center text-gray-600 shadow-soft border border-gray-100 transition-all relative group"
                      aria-label="Copy article link"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-500 group-hover:text-white" /> : <Link2 className="w-4 h-4" />}
                      {copied && (
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-neutral-50 border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center md:text-left">
                Recommended Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((rPost) => (
                  <div
                    key={rPost.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <Link to={`/blog/${rPost.slug}`} className="block overflow-hidden aspect-[16/10] bg-slate-100">
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6 flex-grow flex flex-col">
                      <span className="text-[10px] font-bold text-purple-600 uppercase mb-2 block">
                        {rPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3 leading-snug line-clamp-2">
                        <Link to={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                      </h3>
                      <p className="text-xs text-gray-500 mt-auto flex items-center gap-3">
                        <span>{rPost.date}</span>
                        <span>•</span>
                        <span>{rPost.readTime}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
