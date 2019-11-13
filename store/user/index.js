import { AUTHENTICATE_USER, SET_TOKEN } from '@/store/types'

export const state = () => ({
  token: null
})

export const getters = {
  token: (state) => state.token,
  isAuthenticated: (state) => state.token !== null
}

export const mutations = {
  [SET_TOKEN](state, payload) {
    state.token = payload
  }
}

export const actions = {
  [AUTHENTICATE_USER](vuexContext, authData) {
    // eslint-disable-next-line no-console
    console.log(AUTHENTICATE_USER)
    let authApiUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' // Signin URL
    // If the user is trying to signup, use this piece of code
    if (!authData.isLogin) {
      // Sign up URL
      authApiUrl =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    }
    return this.$axios
      .$post(
        `${authApiUrl}${process.env.firebaseApiKey}`,
        // request body from https://firebase.google.com/docs/reference/rest/auth
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('[Auth] onSubmit - data: ', data)
        vuexContext.commit(SET_TOKEN, data.idToken)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[Auth] onSubmit - error: ', err)
      })
  }
}
