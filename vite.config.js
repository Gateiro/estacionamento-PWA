import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'; 

export default defineConfig({
  plugins: [
    tailwindcss(), 
    react(),

    VitePWA({
      registerType: 'autoUpdate', 

      manifest: {
        name: 'PWA Gestor de Estacionamento',
        short_name: 'EstacPWA',
        description: 'Aplicação para gerir vagas de estacionamento em tempo real.',
        theme_color: '#ffffff', 
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png', 
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png', 
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' 
          }
        ]
      }
    })
  ],
});