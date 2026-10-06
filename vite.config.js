import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /sampleclaude/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sampleclaude/' : '/',
  plugins: [react()],
}));
