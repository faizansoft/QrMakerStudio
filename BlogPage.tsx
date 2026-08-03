import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BlogPost } from './constants/blogData';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = "QR Code Blog & Guides | QR Maker Studio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore QR Code guides, printing standards, restaurant menu tips, real estate marketing strategies, and digital business card tutorials.');
    }

    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog & Guides', url: '/blog' }
    ]));

    return () => {
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, []);

  const categories = ['All', 'Hospitality', 'Printing & Design', 'Business & Networking', 'Real Estate'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="animate-in pb-24 bg-white">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <section className="bg-gradient-hero pt-14 pb-14 border-b border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Knowledge Hub & Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            QR Code Guides & Industry Trends
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Practical strategies, print standards, and hospitality guides to maximize your QR Code engagement.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════ MAIN CONTENT AREA ═══════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 border-b border-neutral-200 pb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-neutral-300 rounded-xl px-4 py-2.5 pl-10 text-sm outline-none focus:border-accent focus:bg-white transition-colors"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Featured Post Hero Banner (Only when All & no search) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mb-16 bg-gray-900 rounded-3xl overflow-hidden text-white grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 shadow-xl">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#BEF392] text-gray-900 text-xs font-bold uppercase rounded-full">
                Featured Guide
              </div>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                <Link to={`/blog/${featuredPost.slug}`} className="hover:text-[#BEF392] transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-white/70 text-base line-clamp-3 leading-relaxed">
                {featuredPost.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-white/50 pt-2">
                <span>{featuredPost.publishDate}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <div className="pt-4">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-xl transition-colors shadow-md"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/10 text-center space-y-4">
              <h3 className="text-lg font-bold text-[#BEF392]">Quick Highlight</h3>
              <p className="text-sm text-white/80 italic leading-relaxed">
                "{featuredPost.excerpt}"
              </p>
              <div className="pt-2 text-xs text-white/60">
                Category: <strong className="text-white">{featuredPost.category}</strong>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="px-2.5 py-1 bg-accent/10 text-accent font-bold rounded-md uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 hover:text-accent transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.publishDate}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-bold text-accent hover:underline flex items-center gap-1"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-neutral-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">No matching articles found</h3>
            <p className="text-gray-500 text-sm mb-6">Try searching for keywords like 'menu', 'print', 'vcard', or 'wifi'.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 bg-accent text-white text-sm font-bold rounded-xl hover:bg-accent-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
