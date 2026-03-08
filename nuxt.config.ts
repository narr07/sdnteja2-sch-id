// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui', // Harus ada di atas @nuxt/content
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  routeRules: {
    // Cache API siswa di CDN Vercel selama 24 jam (ISR)
    '/api/siswa': { isr: 60 * 60 * 24 },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
