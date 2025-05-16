// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
    plugins: [
    '~/plugins/carritoHandler.client.js'
  ],
  app: {
    head: {
      title: 'AuraSport - Tienda de Ropa Deportiva',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AuraSport - La mejor tienda de ropa deportiva en Colombia' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})