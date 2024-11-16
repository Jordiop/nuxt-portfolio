export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: `${require('./package.json').name}`,
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
    public: {
      spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
      spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
      weatherApiKey: process.env.API_KEY_WEATHER_API,
    }
  },
})