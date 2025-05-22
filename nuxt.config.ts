// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-22',
  devtools: { enabled: false },
  css: ['~/public/assets/css/tailwind.css'],

  // SSR must be turned off
  ssr: false,

  modules: ['shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
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
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    baseURL: './',
    buildAssetsDir: '_nuxt/'
  }
});