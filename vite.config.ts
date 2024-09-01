import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
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
        background_color: '#242424',
        display: 'standalone',
        theme_color: '#ff0057',
        description:
          'An eco-design and Life Cycle Assessment (LCA) tool to help you eco-design your zero-carbon website.',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/scss/additional/breakpoints" as *;',
      },
    },
  },
  base: '/lcc',
});
