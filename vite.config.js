import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'  // Node.js 런타임이 기본 제공하는 모듈 (파일 경로). from path 사용가능
import { env } from 'node:process';

// 개발 환경인지 여부를 나타내는 불리언 값
const isDev = env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName : isDev ? '[name]_[local]__[hash:base64:5]' : '[hash:base64:4]'
    }
  },
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
