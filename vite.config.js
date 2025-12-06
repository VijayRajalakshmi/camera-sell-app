import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 🎯 CRITICAL: This base path MUST be correctly set for asset loading.
  base: '/camera-sell-app/', 
});