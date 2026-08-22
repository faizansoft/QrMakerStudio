import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BlogPost } from './constants/blogData';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

/** Author initials for the avatar chip — avoids shipping avatar images. */
const initials = (name: string) =>
  name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

const CATEGORIES = ['All', 'Hospitality', 'Printing & Design', 'Business & Networking', 'Real Estate'];

const PostMeta: React.FC<{ post: BlogPost; tone?: 'light' | 'dark' }> = ({ post, tone = 'light' }) => (
  <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${tone === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold ${
          tone === 'dark' ? 'bg-white/15 text-white' : 'bg-accent-subtle text-accent'
        }`}
        aria-hidden="true"
      >
        {initials(post.author.name)}
      </span>
      {post.author.name}
    </span>
    <span aria-hidden="true">·</span>
    <time>{post.publishDate}</time>
    <span aria-hidden="true">·</span>
    <span>{post.readTime}</span>
  </div>
);

const BlogPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Title, description and canonical are set centrally by SEOManager in
    // App.tsx from constants/routeMeta.ts — the same dictionary
    // scripts/prerender.js reads.
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog & Guides', url: '/blog' }
    ]));
    return () => removeJSONLD('jsonld-breadcrumbs');
  }, [language]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const isBrowsingAll = selectedCategory === 'All' && !searchQuery.trim();
  const featuredPost = isBrowsingAll ? BLOG_POSTS[0] : null;
  // The lead article used to appear again in the grid directly beneath itself.
  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <div className="animate-in bg-white pb-20">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="border-b border-line bg-surface-subtle">
        <div className="container-page py-14 md:py-16">
          <p className="eyebrow mb-4">Guides &amp; Research</p>
          <h1 className="h1-page mb-4 max-w-3xl">QR Code Guides &amp; Industry Practice</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            Print standards, hospitality workflows, and field-tested advice for teams deploying QR
            codes at scale.
          </p>
        </div>
      </header>

      <div className="container-page py-12 md:py-16">

        {/* ── Filters ───────────────────────────────────────────────────── */}
        <div className="mb-10 flex flex-col gap-5 border-b border-line pb-5 lg:flex-row lg:items-end lg:justify-between">
          <nav aria-label="Article categories" className="-mb-px flex gap-1 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-current={active ? 'true' : undefined}
                  className={`whitespace-nowrap border-b-2 px-3 pb-3 text-sm font-medium transition-colors ${
                    active
                      ? 'border-accent text-accent'
                      : 'border-transparent text-ink-soft hover:border-line-strong hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>

          <div className="relative w-full lg:w-72">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <input
              id="blog-search"
              type="search"
              placeholder="Search articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-accent"
            />
            <svg className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-ink-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* ── Featured ──────────────────────────────────────────────────── */}
        {featuredPost && (
          <article className="mb-12 overflow-hidden rounded-panel border border-line bg-surface-dark">
            <div className="grid gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-10">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-light">
                  Featured · {featuredPost.category}
                </p>
                <h2 className="mb-3 text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl">
                  <Link to={`/blog/${featuredPost.slug}`} className="transition-colors hover:text-accent-light">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mb-5 max-w-xl leading-relaxed text-slate-300">
                  {featuredPost.description}
                </p>
                <PostMeta post={featuredPost} tone="dark" />
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-button bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Read the guide
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Key takeaways give the panel a reason to exist — it previously
                  held the excerpt in quote marks, which just repeated the
                  description sitting next to it. */}
              <div className="rounded-card border border-white/10 bg-white/[0.04] p-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                  What you will learn
                </h3>
                <ul className="space-y-2.5">
                  {featuredPost.keyTakeaways.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-light" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        )}

        {/* ── Result count ──────────────────────────────────────────────── */}
        <p className="mb-6 text-sm text-ink-soft" role="status">
          {filteredPosts.length === 0
            ? 'No articles found'
            : `Showing ${filteredPosts.length} article${filteredPosts.length === 1 ? '' : 's'}`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>

        {/* ── Grid ──────────────────────────────────────────────────────── */}
        {gridPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-panel border border-line bg-white transition-colors hover:border-line-strong"
              >
                <div className="flex-1 p-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                    {post.category}
                  </p>
                  <h3 className="mb-2.5 text-lg font-semibold leading-snug tracking-tight text-ink">
                    <Link to={`/blog/${post.slug}`} className="transition-colors group-hover:text-accent">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {post.description}
                  </p>
                </div>
                <div className="border-t border-line px-6 py-4">
                  <PostMeta post={post} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          filteredPosts.length === 0 && (
            <div className="rounded-panel border border-dashed border-line-strong bg-surface-subtle py-16 text-center">
              <h3 className="mb-2 text-lg font-semibold text-ink">No matching articles</h3>
              <p className="mx-auto mb-6 max-w-sm text-sm text-ink-muted">
                Try a broader term such as “menu”, “print”, “vcard” or “wifi”, or clear the filters.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="rounded-button border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                Clear filters
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogPage;
