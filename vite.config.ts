import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: 'lcc',
        name: 'Calculateur de cycle de vie',
        icons: [
          {
            src: '/lcc/lcc-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/lcc/lcc-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/lcc/lcc-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/lcc/lcc-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
        start_url: '/lcc/',
        background_color: '#1e1e20',
        display: 'standalone',
        theme_color: '#1e1e20',
        description: 'Calculateur de cycle de vie est un outil d’éco-conception et d’Analyse du Cycle de Vie (ACV) pour vous aider à éco-concevoir votre site web zéro carbone.',
      },
    }),
  ],
  base: '/lcc/',
})
