import webpack from 'webpack'

import tnt from './tnt.config.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // We could... create and import a tnt.json file and utilise its values here... and elsewhere throughout the file.
  env: {
    siteTitle: tnt.title,
    siteDescription: tnt.description,
    baseUrl: (process.env.NODE_ENV === 'production' ? tnt.url : 'http://localhost:3000'),
    siteImg: tnt.image
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: tnt.title,
    titleTemplate: `%s | ${tnt.title}`,
    htmlAttrs: {
      'data-theme': 'luxury'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: tnt.description },
      { hid: 'og:site_name', property: 'og:site_name', content: tnt.title },
      { hid: 'og:title', property: 'og:title', content: tnt.title },
      { hid: 'og:description', property: 'og:description', content: tnt.description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `${tnt.url}/` },
      { hid: 'og:image', property: 'og:image', content: `${tnt.url}${tnt.image}` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css', integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X', crossorigin: 'anonymous' }
    ],
    script: [
      process.env.NODE_ENV === 'production' ? { src: 'https://analytics.thombruce.com/umami.js', 'data-website-id': 'e50b8ea0-e863-4acb-9991-ac3eb763d47c', async: true, defer: true } : {}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/staticman'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@thombruce/nuxt-tnt",
    "@thombruce/vue-timepiece/nuxt",
    "@thombruce/vue-fountain/nuxt",
    "@thombruce/vue-playfair/nuxt"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  image: {
    domains: [
      'https://popcorn.thombruce.com',
      'https://ink.thombruce.com',
      'https://happy.thombruce.com',
      'https://code.thombruce.com',
      'https://beer.thombruce.com',
      'https://ordahhh.thombruce.com'
    ]
  },

  fontawesome: {
    icons: {
      // regular: true, // TODO: List only the icons used!
      solid: [
        'faHome',
        'faPenAlt',
        'faCode',
        'faFilm',
        'faBook',
        'faInfo',
        'faStar',
        'faStarHalf',
        'faCaretRight'
      ],
      // brands: true, // TODO: List only the icons used!
    }
  },

  router: {
    base: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ]
  }
}
