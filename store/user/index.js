import Cookie from 'js-cookie'
import {
  AUTHENTICATE_USER,
  SET_TOKEN,
  CLEAR_TOKEN,
  INIT_AUTH
} from '@/store/types'

function getCookieValue(cookie, key) {
  // trying to get key/value pair
  const cookieKeyValuePair = cookie
    .split(';')
    .find((str) => str.trim().startsWith(`${key}=`))

  // If no key/value pair found, then return null
  if (!cookieKeyValuePair) {
    return null
  }

  return cookieKeyValuePair.split('=')[1]
}

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
  /**
   * TODO: only keep the cookie storage approach
   * @param vuexContext
   * @param authData
   * @returns {Promise<any | never>}
   */
  [AUTHENTICATE_USER](vuexContext, authData) {
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
        const timeout = Number.parseInt(data.expiresIn) * 1000
        const tokenExpiration = new Date().getTime() + timeout

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('tokenExpiration', tokenExpiration)

        Cookie.set('token', data.idToken)
        Cookie.set('tokenExpiration', tokenExpiration)

        vuexContext.commit(SET_TOKEN, data.idToken)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[AUTHENTICATE_USER] onSubmit - error: ', err)
      })
  },

  /**
   * TODO: only keep the cookie storage approach
   * @param vuexContext
   * @param req
   */
  [INIT_AUTH](vuexContext, req) {
    let token
    let tokenExpiration

    // req is defined if initAuth is executed on the server and req express object is created
    if (req) {
      // if no cookie set yet, then return
      if (!req.headers.cookie) {
        return
      }
      // Check if token is stored in the cookie
      token = getCookieValue(req.headers.cookie, 'token')
      tokenExpiration = getCookieValue(req.headers.cookie, 'tokenExpiration')
    } else {
      // Check if token is stored in the localStorage
      token = localStorage.getItem('token')
      tokenExpiration = localStorage.getItem('tokenExpiration')
    }

    const isTokenExpired = new Date() > Number.parseInt(tokenExpiration)

    // If token is expired, then a new authentication is needed
    if (isTokenExpired || !token) {
      // The token has to be cleared
      vuexContext.commit(CLEAR_TOKEN)
      return
    }

    // The token is finally set
    vuexContext.commit(SET_TOKEN, token)
  }
}
