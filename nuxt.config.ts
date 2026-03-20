// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:["/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/content", 
    "@nuxtjs/i18n"
  ],
  tailwindcss:{
    cssPath:"/assets/css/main.css"
  },
  app:{
    head:{
      title:"Nuxt Eğitim",
      htmlAttrs:{
        lang:"tr"
      }
    }
  },
   i18n: {
    langDir: 'locales',
    //defaultLocale: 'tr',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'tr', name: 'Türkçe', file: 'tr.json' }
    ]
  }

})