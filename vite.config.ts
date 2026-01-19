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
    }
  };
});
