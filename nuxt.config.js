require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'Doongji Smart Portfolio',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'dragula/dist/dragula.css',
    {src: '~/assets/css/custom.css', body: true}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/dragula.js', mode: 'client' },
    { src: '~/plugins/downloader.js', mode: 'client' },
    { src: '~/plugins/vue-luxon.js', mode: 'client' },
    '~/plugins/uuid.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/dotenv',
    '@nuxtjs/localforage',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  router: {
    mode: 'hash'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://db.doongji.kr/nc/doongjiblack_jagi/api/v1/',
    headers: {
      'xc-auth': process.env.API_AUTH
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
