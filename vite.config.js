import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'  // Node.js 런타임이 기본 제공하는 모듈 (파일 경로). from path 사용가능



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName : `[name]_[local]_[hase:base64:9]`
    }
  },
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
