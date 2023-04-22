import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: 'lcc',
        name: 'Life Cycle Calculator',
        icons: [
          {
            src: "/icon-512x512.png",
            type: "image/svg+xml",
            sizes: "512x512",
          }
        ],
        start_url: '/lcc/',
        background_color: "#1e1e20",
        display: "standalone",
        theme_color: "#1e1e20",
        description: "What is the impact of your website on the planet?",
      },
    }),
  ],
  base: '/lcc/',
})
