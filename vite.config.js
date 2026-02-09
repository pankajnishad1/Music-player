import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'musicplayer' with your actual GitHub repository name
// If deploying to https://username.github.io/repo-name/, use: base: '/repo-name/'
// If deploying to https://username.github.io/, use: base: '/'

export default defineConfig({
  plugins: [react()],
  base: '/Music-player/',
})
