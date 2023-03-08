const fs = require('fs')
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'notification_poc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],
  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyAxtJ27ItN4JayVkfKt7UvLhw7M0Do3a-4",
      authDomain: "development-for-hub.firebaseapp.com",
      projectId: "development-for-hub",
      storageBucket: "development-for-hub.appspot.com",
      messagingSenderId: "590746739570",
      appId: "1:590746739570:web:bbbce2208f1d44bdb7b3eb",
      measurementId: "G-28W8T7ZYW9"
    },
    services: {
      messaging:  {
        createServiceWorker: true,
        fcmPublicVapidKey: 'BPJBPofDbh7gPIeG3bqGORoRqRQSjOmiqGx_S962klWZAQPtQ5qhpCHZkfJHtg5w7IKl2XTWII3dAobzmE8bdH8' //see step 7
      },
    }
    },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pwa: {
    workbox: {
      importScripts: ['/serviceWorker.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  }
}
