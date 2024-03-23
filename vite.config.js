import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

console.log('VITE_BASE_URL', process.env.VITE_BASE_URL)

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  define: {
    'process.env': {
      VITE_BASE_URL: JSON.stringify(process.env.VITE_BASE_URL),
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
    },
  },
})
