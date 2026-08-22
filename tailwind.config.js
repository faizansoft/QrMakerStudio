/** @type {import('tailwindcss').Config} */

/**
 * Design tokens.
 *
 * The site previously mixed three neutral ramps (slate 662 uses, gray 277,
 * neutral 142), five different H1 size scales, six container widths and six
 * corner radii — so pages that were meant to look like one product looked
 * subtly different from each other. Slate is now the single neutral ramp; the
 * scales below are the only approved steps.
 *
 * Use the semantic aliases (ink, surface, line) in new work rather than raw
 * slate-N, so a future palette change is one edit here.
 */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand green. accent-light is a muted sage rather than the previous
        // neon #BEF392, which read as consumer-playful against the rest of the
        // palette and undercut the professional tone everywhere it appeared.
        accent: {
          DEFAULT: '#2B6F53',
          dark: '#1F5A42',
          light: '#A8D5C2',
          subtle: '#EEF6F2',
        },
        // Semantic aliases over the slate ramp.
        ink: {
          DEFAULT: '#0F172A',   // slate-900 — headings
          muted: '#475569',     // slate-600 — body copy
          soft: '#64748B',      // slate-500 — secondary
          faint: '#94A3B8',     // slate-400 — captions, meta
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',    // slate-50 — alternating sections
          sunken: '#F1F5F9',    // slate-100 — wells, table headers
          dark: '#0F172A',      // dark panels
        },
        line: {
          DEFAULT: '#E2E8F0',   // slate-200 — default hairline
          strong: '#CBD5E1',    // slate-300 — emphasised divider
        },
        star: '#D97706',
      },
      fontFamily: {
        display: ['"Roboto Flex"', 'sans-serif'],
        body: ['"Roboto Flex"', 'sans-serif'],
      },
      // Three steps only: controls, small cards, major cards.
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'panel': '16px',
        'banner': '16px',
      },
      maxWidth: {
        'prose-page': '48rem',   // long-form reading column
        'content': '72rem',      // standard page content
      },
    },
  },
  plugins: [],
};
