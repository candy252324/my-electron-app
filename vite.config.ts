import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), UnoCss()],
})
