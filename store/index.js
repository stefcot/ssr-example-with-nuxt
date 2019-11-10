import axios from 'axios'
import { SET_POSTS, ADD_POST, EDIT_POST } from '@/store/types'

export const state = () => ({
  loadedPosts: []
})

export const getters = {
  loadedPosts: (state) => state.loadedPosts
}

export const mutations = {
  [SET_POSTS](state, posts) {
    state.loadedPosts = posts
  },
  [ADD_POST](state, post) {
    state.loadedPosts.push(post)
  },
  [EDIT_POST](state, post) {
    const postIndex = state.loadedPosts.findIndex((item) => item.id === post.id)
    state.loadedPosts[postIndex] = post
  }
}

export const actions = {
  // Executed only once in the server (side), dispatched by NUXT automatically
  // and will initialize the store so that some data are fetched whose youy worry a lot only once
  // and you now can use through other components without having to reach out with the server
  // NOTE : if you need specific data you can still use asyncData for that
  nuxtServerInit(vuexContext, context) {
    return axios
      .get(`${process.env.baseApiUrl}/posts.json`)
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
  },

  [ADD_POST](vuexContext, payload) {
    const createdPost = {
      ...payload,
      updatedDate: new Date()
    }

    return axios
      .post(`${process.env.baseApiUrl}/posts.json`, createdPost)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('Store - ADD_POST on success - res: ', res)
        vuexContext.commit(ADD_POST, { ...createdPost, id: res.data.name })
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  },

  [EDIT_POST](vuexContext, payload) {
    // eslint-disable-next-line no-console
    console.log('Store - EDIT_POST - payload: ', payload)
    return axios
      .put(`${process.env.baseApiUrl}/posts/${payload.id}.json`, payload)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('Store - EDIT_POST on success - res: ', res)
        vuexContext.commit(EDIT_POST, payload)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}
