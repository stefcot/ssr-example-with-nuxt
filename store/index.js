import { SET_POSTS } from '@/store/types'

export const state = () => ({
  loadedPosts: []
})

export const getters = {
  loadedPosts: (state) => state.loadedPosts
}

export const mutations = {
  [SET_POSTS](state, posts) {
    state.loadedPosts = posts
  }
}

export const actions = {
  // Executed only once in the server (side), dispatched by NUXT automatically
  // and will initialize the store so that some data are fetched whose youy worry a lot only once
  // and you now can use through other components without having to reach out with the server
  // NOTE : if you need specific data you can still use asyncData for that
  nuxtServerInit(vuexContext, context) {
    // If the promise is rejected, the page will be redirected to the error page.
    return new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        // Call commit once the request has been made on the vuexContext to feel the store
        // Pass directly the array value expected by the loadedPosts entry
        vuexContext.commit(SET_POSTS, [
          {
            id: 1,
            author: 'Stéphane Cottereau',
            title: 'What I think about Vue.js',
            previewText:
              "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.",
            thumbnail:
              '765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg'
          },
          {
            id: 2,
            author: 'Stéphane Cottereau',
            title: 'What I thought about Vue.js & Nuxt.js',
            previewText:
              'With Nuxt.js, your application will be optimized out of the box. We do our best to build performant applications by utilizing Vue.js and Node.js best practices. To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.',
            thumbnail:
              '765105-technology-background-images-1920x1080-free-download.jpg'
          }
        ])
        resolve()
      }, 5000)
      // reject(new Error()) // For some reason something went south
    })
  },

  [SET_POSTS](vuexContext, payload) {
    vuexContext.commit(SET_POSTS, payload)
  }
}
