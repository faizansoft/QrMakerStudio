import React from 'react';
import { getSectionHeadings } from '../constants/richContent';
import type { RichContent, ContentSection } from '../constants/richContent';

/**
 * Renders the long-form sections that previously existed ONLY in the
 * prerendered HTML emitted by scripts/prerender.js.
 *
 * React mounts with createRoot, which discards the prerendered markup in #app.
 * Googlebot indexes the rendered DOM, so anything the client does not re-render
 * never reaches the index. This component closes that gap: it reads the same
 * scripts/*RichData.js objects the prerenderer uses, so the crawler sees the
 * same depth of content whether or not it executes JavaScript.
 *
 * Sections already rendered elsewhere on the page (intro, steps, features,
 * use cases, FAQ) are deliberately NOT repeated here.
 */

interface Props {
  rich: RichContent | null;
  /** Pathname used to look up page-specific section headings. */
  pathname: string;
  /**
   * Intro prose from routeContent.sections. Pass this on pages that have no
   * intro section of their own (blog posts); Home and FeaturePage render it
   * themselves higher up the page.
   */
  sections?: ContentSection[];
  /**
   * Also render steps / features / use cases / FAQ. Home and FeaturePage lay
   * these out themselves, so they leave it off; blog posts have no equivalent
   * markup and would otherwise drop those sections from the rendered DOM.
   */
  includeSharedSections?: boolean;
}

const SectionShell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <section className={`border-t border-slate-100 py-16 md:py-20 ${className}`}>
    <div className="mx-auto max-w-4xl px-4">{children}</div>
  </section>
);

const RichSeoSections: React.FC<Props> = ({ rich, pathname, sections, includeSharedSections = false }) => {
  if (!rich && !sections?.length) return null;

  const {
    technicalOverview,
    comparisonTable,
    sizingMatrix,
    troubleshooting,
    bestPractices,
    steps,
    features,
    useCases,
    faqs
  } = rich || {};

  const headings = getSectionHeadings(pathname);

  return (
    <>
      {sections?.map((section, si) => (
        <SectionShell key={`intro-${si}`} className="bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{section.title}</h2>
          <div className="space-y-4">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-slate-600">{p}</p>
            ))}
          </div>
        </SectionShell>
      ))}

      {technicalOverview && (
        <SectionShell className="bg-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Technical Architecture &amp; Protocol
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{technicalOverview.title}</h2>
          <div className="space-y-4">
            {technicalOverview.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-slate-600">{p}</p>
            ))}
          </div>
        </SectionShell>
      )}

      {comparisonTable && (
        <SectionShell className="bg-slate-50">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">{comparisonTable.title}</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-200">
                  {comparisonTable.headers.map((h, i) => (
                    <th key={i} className={`px-4 py-3.5 font-bold ${i === 1 ? 'text-accent' : 'text-slate-900'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-4 py-3 font-semibold text-slate-800">{row[0]}</td>
                    <td className="px-4 py-3 font-semibold text-accent">{row[1]}</td>
                    <td className="px-4 py-3 text-slate-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionShell>
      )}

      {sizingMatrix && (
        <SectionShell className="bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-center">{sizingMatrix.title}</h2>
          {sizingMatrix.description && (
            <p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">{sizingMatrix.description}</p>
          )}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-200">
                  {sizingMatrix.headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 font-bold text-slate-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizingMatrix.rows.map((row, idx) => (
                  <tr key={idx} className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-4 py-2.5 font-semibold text-slate-800">{row[0]}</td>
                    <td className="px-4 py-2.5 text-slate-600">{row[1]}</td>
                    <td className="px-4 py-2.5 font-semibold text-accent">{row[2]}</td>
                    <td className="px-4 py-2.5 text-slate-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionShell>
      )}

      {includeSharedSections && steps?.length && (
        <SectionShell className="bg-slate-50">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
            {headings.steps}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-white">
                  {s.number}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{s.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}

      {includeSharedSections && features?.length && (
        <SectionShell className="bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
            {headings.features}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="mb-2 text-base font-bold text-accent">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{f.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}

      {includeSharedSections && useCases?.length && (
        <SectionShell className="bg-slate-50">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-center">
            {headings.useCases}
          </h2>
          <ul className="grid list-none gap-5 p-0 sm:grid-cols-2">
            {useCases.map((u, i) => (
              <li key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-1.5 text-base font-bold text-slate-900">{u.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{u.description}</p>
              </li>
            ))}
          </ul>
        </SectionShell>
      )}

      {troubleshooting && (
        <SectionShell className="bg-white">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-red-900 mb-5">{troubleshooting.title}</h2>
            <ul className="list-disc space-y-2.5 pl-5 text-red-900/90 leading-relaxed">
              {troubleshooting.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </SectionShell>
      )}

      {includeSharedSections && faqs?.length && (
        <SectionShell className="bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-center">
            {headings.faqs}
          </h2>
          <p className="mb-8 text-center text-slate-500">
            Everything developers, marketers, and business owners need to know.
          </p>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              // <details> keeps the answer in the DOM whether open or closed,
              // which is what lets the FAQPage schema match the page text.
              <details key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <summary className="cursor-pointer p-5 text-base font-bold text-slate-900">{f.q}</summary>
                <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </SectionShell>
      )}

      {bestPractices && (
        <SectionShell className="bg-white">
          <div className="rounded-2xl bg-[#0F172A] p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-emerald-400 mb-3">
              {headings.bestPractices}
            </h2>
            <p className="text-slate-300 leading-relaxed">{bestPractices}</p>
          </div>
        </SectionShell>
      )}
    </>
  );
};

export default RichSeoSections;
