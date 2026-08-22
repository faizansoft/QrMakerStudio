import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use process.cwd() with type assertion to satisfy TypeScript in environments where 
  // the 'Process' type might be incorrectly inferred from the browser.
  // This fixes the error: Property 'cwd' does not exist on type 'Process'.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  // Combine variables from .env files and the actual system environment (important for Vercel)
  const apiKey = env.API_KEY || process.env.API_KEY || "";

  return {
    plugins: [react()],
    define: {
      // Stringify the key so it's injected as a valid JS string literal in the client bundle.
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false, // Cleaner production builds
      rollupOptions: {
        output: {
          // The app previously shipped as one ~1.1 MB chunk, so every visitor
          // to a static content page downloaded the scanner, the ZIP writer and
          // the Supabase client before anything became interactive.
          manualChunks(id) {
            if (!id.includes('node_modules') && !id.includes('scripts/')) return;

            // Long-form page copy. Large, cacheable, and changes on a different
            // cadence than the app code — but it must stay in the initial graph
            // so the rendered DOM Google indexes is complete.
            if (/scripts[\\/](tool|feature|blog|company)RichData\.js$/.test(id)) return 'seo-content';
            if (/scripts[\\/]routeContent\.js$/.test(id)) return 'seo-content';

            if (id.includes('html5-qrcode')) return 'scanner';
            if (id.includes('jszip')) return 'zip';
            if (id.includes('qr-code-styling')) return 'qr-engine';
            if (id.includes('@supabase')) return 'supabase';
            if (id.includes('react-router')) return 'router';
            if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
          }
        }
      }
    }
  };
});
