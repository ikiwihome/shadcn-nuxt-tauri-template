// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-22',
  devtools: { enabled: false },
  css: ['./src/assets/css/tailwind.css'],

  // SSR must be turned off
  ssr: false,
  srcDir: "src/",

  modules: ['shadcn-nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./src/components/ui"
     */
    componentDir: './src/components/ui'
  },
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    prerender: {
      routes: ['/src', '/sitemap.xml'],
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