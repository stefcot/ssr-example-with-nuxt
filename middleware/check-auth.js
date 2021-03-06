import { INIT_AUTH } from '@/store/types'
export default function(context) {
  // eslint-disable-next-line no-console
  console.log('[MiddleWare] Check auth')
  // Trigger the auth verification on first page load, whatever it is
  // process.client is an environment variable provided by nuxt
  // if (process.client) {
  //   context.store.dispatch(`user/${INIT_AUTH}`)
  // }
  // instead we pass the the server request that would be null if context is client
  context.store.dispatch(`user/${INIT_AUTH}`, context.req)
}
