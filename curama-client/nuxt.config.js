import colors from 'vuetify/es5/util/colors'
require('dotenv').config();

export default {
  ssr: false,
  head: {
    titleTemplate: 'CURAMA | Admin',
    title: 'CURAMA | Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },
  server: {
    host: '0.0.0.0'
  },
  css: [
    '@/assets/core.scss',
    '@/assets/material-icons.css',
    '@/assets/simple-code-editor.theme.css',
    '@/assets/simple-code-editor.github-dark.min.css'
  ],
  plugins: [
    '~plugins/vue-socket.io.js',
    '~plugins/vuelidate.js',
    '~plugins/vue-toasted.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      plugins: [
        ['wildcard']
      ]
    }
  },
  env: {
    API_URL: process.env.API_URL,
    WEBSOCKET_SERVER: process.env.WEBSOCKET_SERVER
  }
}
