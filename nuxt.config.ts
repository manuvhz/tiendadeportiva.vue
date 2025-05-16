export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  app: {
    head: {
      title: 'Aura Sport - Ropa Deportiva Premium',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favi.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap', 
          rel: 'stylesheet' 
        }
      ]
    }
  }
})