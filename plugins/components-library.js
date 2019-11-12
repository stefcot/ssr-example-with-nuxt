import Vue from 'vue'

// Require all the components that start with 'LibXXX.vue'
const components = require.context(
  '@/components',
  true,
  /Lib[a-zA-Z0-9]+\.(jsx?|vue)$/i
)

// To extract the component name
const nameReg = /Lib([a-zA-Z0-9]+)\./i

// Registration
components.keys().forEach((key) => {
  const name = key.match(nameReg)[1]
  Vue.component(name, components(key).default)
})
