import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/assets',
  root: 'client',
  build: {
    outDir: '../app/src/main/assets',
    emptyOutDir: true,
  },
})
