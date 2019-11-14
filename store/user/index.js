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
        console.log('[AUTHENTICATE_USER] data: ', data)
        const timeout = data.expiresIn * 1000
        // eslint-disable-next-line no-console
        console.log('[AUTHENTICATE_USER] timeout: ', timeout)
        const tokenExpiration = new Date().getTime() + timeout
        // eslint-disable-next-line no-console
        console.log('[AUTHENTICATE_USER] tokenExpiration: ', tokenExpiration)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('tokenExpiration', tokenExpiration)

        vuexContext.commit(SET_TOKEN, data.idToken)
        vuexContext.dispatch(SET_LOGOUT_TIMER, timeout)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[AUTHENTICATE_USER] onSubmit - error: ', err)
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
    const isTokenExpired = new Date() > +tokenExpiration
    // eslint-disable-next-line no-console
    console.log('INIT_AUTH - token: ', token)
    // eslint-disable-next-line no-console
    console.log('INIT_AUTH - tokenExpiration: ', tokenExpiration)
    // eslint-disable-next-line no-console
    console.log('INIT_AUTH - isTokenExpired: ', isTokenExpired)

    // If token is expired, then a new authentication is needed
    if (isTokenExpired || !token) {
      return
    }

    const remainingTimeout = +tokenExpiration - new Date().getTime()
    // eslint-disable-next-line no-console
    console.log('INIT_AUTH - remainingTimeout: ', remainingTimeout)
    // If the user arrives on a page still authenticated,
    // we subtract the current time from the expiration
    // date to get the remaining timeout
    vuexContext.dispatch(SET_LOGOUT_TIMER, remainingTimeout)
    vuexContext.commit(SET_TOKEN, token)
  }
}
