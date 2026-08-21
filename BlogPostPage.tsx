import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from './constants/blogData';
import { useLanguage } from './context/LanguageContext';
import { injectJSONLD, removeJSONLD, getBreadcrumbSchema } from './services/seoUtils';

const BlogPostPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    // 1. Title and Meta Description
    document.title = `${post.title} | QR Generator Online Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', post.description);
    }

    // 2. Structured Data (JSON-LD BlogPosting)
    const blogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: '2026-08-01',
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role
      },
      publisher: {
        '@type': 'Organization',
        name: 'QR Generator Online',
        logo: 'https://qr-generator.online/og-image.png'
      },
      mainEntityOfPage: `https://qr-generator.online/blog/${post.slug}`
    };

    injectJSONLD('jsonld-blog-post', blogPostingSchema);
    injectJSONLD('jsonld-breadcrumbs', getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` }
    ]));

    return () => {
      removeJSONLD('jsonld-blog-post');
      removeJSONLD('jsonld-breadcrumbs');
    };
  }, [post, language]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="animate-in pb-24 bg-white">
      {/* ═══════════════════════════ HERO HEADER ═══════════════════════════ */}
      <header className="bg-gradient-hero pt-14 pb-14 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-500 pt-2">
            <span>By <strong>{post.author.name}</strong> ({post.author.role})</span>
            <span>•</span>
            <span>{post.publishDate}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════ MAIN ARTICLE CONTAINER ═══════════════════════════ */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* Intro Excerpt Box */}
        <div className="p-6 md:p-8 bg-accent/5 border-l-4 border-accent rounded-r-2xl text-gray-700 text-lg font-medium leading-relaxed">
          {post.excerpt}
        </div>

        {/* Dynamic Content Sections */}
        <div className="space-y-10">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b border-neutral-100 pb-3">
                {sec.sectionTitle}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Key Takeaways Callout */}
        <div className="bg-gray-900 text-white p-8 rounded-3xl space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-[#BEF392] uppercase tracking-wider flex items-center gap-2">
            💡 Key Takeaways
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-white/90">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Embedded QR Generator CTA Banner */}
        <div className="bg-gradient-hero border border-neutral-200 p-8 rounded-3xl text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Put This Strategy Into Practice</h3>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Create custom vector QR codes for your business using our free browser-based generator.
          </p>
          <div>
            <Link
              to={post.relatedToolSlug}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-sm transition-colors shadow-md"
            >
              Open {post.relatedToolName} →
            </Link>
          </div>
        </div>

        {/* Article FAQs */}
        {post.faqs.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-2xl font-bold text-gray-900">Article FAQs</h3>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-neutral-200 space-y-2">
                  <h4 className="font-bold text-gray-900 text-base">{faq.question}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles Footer */}
        <div className="border-t border-neutral-200 pt-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Related Industry Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-accent hover:shadow-md transition-all space-y-2 block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {rel.category}
                </span>
                <h4 className="font-bold text-gray-900 text-sm line-clamp-2 leading-snug">{rel.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{rel.description}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};

export default BlogPostPage;
