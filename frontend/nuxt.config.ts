// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],

  headlessui: {
    prefix: 'Headless'
  },

  devtools: { enabled: true }
})
