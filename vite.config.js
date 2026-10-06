import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /sampleclaude/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sampleclaude/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        office: new URL('./office.html', import.meta.url).pathname,
      },
    },
  },
}));
