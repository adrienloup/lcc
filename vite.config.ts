import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
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
            src: "/lcc/vite-192x192.svg",
            type: "image/svg+xml",
            sizes: "192x192",
          },
          {
            src: "/lcc/vite-256x256.svg",
            type: "image/svg+xml",
            sizes: "256x256",
          },
          {
            src: "/lcc/vite-384x384.svg",
            type: "image/svg+xml",
            sizes: "384x384",
          },
          {
            src: "/lcc/vite-512x512.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
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
