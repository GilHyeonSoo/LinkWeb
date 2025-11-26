import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // ⬅️ 이 줄 추가! (상대 경로로 변경)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});