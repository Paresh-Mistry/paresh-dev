import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-pdf'], // This explicitly tells Rollup to treat react-pdf as external
    },
  },
  plugins: [react()],
  base:"/paresh-dev"
})
