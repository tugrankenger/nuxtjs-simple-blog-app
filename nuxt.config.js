export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // mode: 'spa', // for only client side
  head: {
    title: 'nuxtjs-simple-blog-app',
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
    ],
    // script:[
    //   {src: 'https://cdn...'} // for example jquery
    // ]
  },

  loading:{color: '#00FF00', height:'2px'}, //failedColor:'#FF0000'

  // loadingIndicator:{
  //   name: 'circle',
  //   color: 'orange'
  // },

  env:{
    baseUrl: 'https://nuxtjs-simple-blog-app-default-rtdb.firebaseio.com/'
  },

  app:{
    pageTransition:{
      name:'page', // name: 'layout'
      mode:'out-in'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/component.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
