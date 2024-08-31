// https://nuxt.com/docs/api/configuration/nuxt-config
const titleTemplate = 'Portfolio'
const titleChunk = titleTemplate ? `%s - ${titleTemplate}` : null

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: titleChunk ? `${titleChunk} - Nuxt` : 'Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', 'nuxt-feather-icons'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Private keys are only available on the server side
    public: {
      spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
      spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
      weatherApiKey: process.env.API_KEY_WEATHER_API,
    }
  },
})