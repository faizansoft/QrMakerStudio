
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load all environment variables from the current process context.
  // We use an empty prefix ('') to ensure we can pick up the API_KEY 
  // without the standard VITE_ prefix required by Vite's automatic loading.
  // Fix: Cast process to any to avoid "Property 'cwd' does not exist on type 'Process'" TypeScript error.
  const nodeProcess = process as any;
  const env = loadEnv(mode, nodeProcess.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || nodeProcess.env.API_KEY),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  };
});
