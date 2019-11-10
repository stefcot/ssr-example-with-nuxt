export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#F00' },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/components-library'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    /*
     * Here you can store all you env based variables as so
     *
     */
    baseApiUrl:
      process.env.BASE_API_URL || 'https://nuxt-db-post.firebaseio.com'
  },
  pageTransition: {
    /*
     * Transition prefix for the anim executed between 2 pages, like the rest, it can be overwritten
     */
    name: 'fade',
    mode: 'out-in'
  }
}
