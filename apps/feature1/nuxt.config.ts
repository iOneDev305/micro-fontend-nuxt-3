// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Feature 1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Feature 1 Micro-frontend' }
      ]
    }
  },
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY || ''
    }
  },
  alias: {
    '@shared': '../../shared'
  }
}) 