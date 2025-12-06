import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 🎯 CRITICAL: This base path MUST match your repository name.
  base: '/camera-sell-app/', 
});