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
  [SET_POSTS](vuexContext, payload) {
    vuexContext.commit(SET_POSTS, payload)
  }
}
