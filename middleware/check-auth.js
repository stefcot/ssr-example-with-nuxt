import { INIT_AUTH } from '@/store/types'
export default function(context) {
  // eslint-disable-next-line no-console
  console.log('[MiddleWare] Check auth middleware')
  // Trigger the auth verification on first page load, whatever it is
  if (process.client) {
    context.store.dispatch(`user/${INIT_AUTH}`)
  }
}
