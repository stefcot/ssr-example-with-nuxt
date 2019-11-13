import {
  AUTHENTICATE_USER,
  SET_TOKEN,
  CLEAR_TOKEN,
  SET_LOGOUT_TIMER,
  INIT_AUTH
} from '@/store/types'

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
  },

  [CLEAR_TOKEN](state) {
    state.token = null
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
        localStorage.setItem('token', data.idToken)
        localStorage.setItem(
          'tokenExpiration',
          new Date().getTime() + data.expiresIn * 1000
        )
        vuexContext.commit(SET_TOKEN, data.idToken)
        vuexContext.dispatch(SET_LOGOUT_TIMER, data.expiresIn * 1000)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[Auth] onSubmit - error: ', err)
      })
  },

  [SET_LOGOUT_TIMER](vuexContext, duration) {
    // Can be call on authentication and on first page load
    // as well if the token is still valid
    setTimeout(() => {
      vuexContext.commit(CLEAR_TOKEN)
    }, duration)
  },

  [INIT_AUTH](vuexContext) {
    // Checkk if token are present
    const token = localStorage.getItem('token')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    // If token is expired, then a new authentication is needed
    if (new Date() > tokenExpiration || token) {
      return
    }

    // If the user arrives on a page still authenticated,
    // we subtract the current time from the expiration
    // date to get the remaining time
    vuexContext.dispatch(
      SET_LOGOUT_TIMER,
      tokenExpiration - new Date().getTime()
    )
    vuexContext.commit(SET_TOKEN, token)
  }
}
