import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 🎯 REMOVE base: '/camera-sell-app/' or set it to '/'
  // base: '/', 
});