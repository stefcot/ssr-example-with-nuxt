import axios from 'axios'
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
    return axios
      .get('https://nuxt-db-post.firebaseio.com/posts.json')
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('nuxtServerInit - res.data: ', res.data)
        const postsArray = []

        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }

        vuexContext.commit(SET_POSTS, postsArray)
      })
      .catch((err) => {
        context.error(err)
      })
  },

  [SET_POSTS](vuexContext, payload) {
    vuexContext.commit(SET_POSTS, payload)
  }
}
