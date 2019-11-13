export default function(context) {
  // eslint-disable-next-line no-console
  console.log('[MiddleWare] The Log middleware is running')
  if (!context.store.getters['user/isAuthenticated']) {
    context.redirect('/admin/auth')
  }
}
