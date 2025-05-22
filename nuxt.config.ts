// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-22',
    devtools: { enabled: false },
    ssr: false, // SSR must be turned off
    nitro: {
        preset: 'static',
        compressPublicAssets: true,
        prerender: {
          routes: ['/', '/sitemap.xml'],
          crawlLinks: true
        },
        routeRules: {
          '/**': { 
            headers: {
              'X-Frame-Options': 'DENY',
              'X-Content-Type-Options': 'nosniff',
              'Referrer-Policy': 'strict-origin-when-cross-origin',
              'Permissions-Policy': 'geolocation=(), microphone=()'
            }
          }
        }
      },
    app: {
        baseURL: './',
        buildAssetsDir: '_nuxt/'
    },
})
