<template>
  <div>
    <AppHeader @sidenavToggle="displaySideNav = !displaySideNav"></AppHeader>
    <SideNav :show="displaySideNav" @close="displaySideNav = false"></SideNav>
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/Navigation/AppHeader'
import SideNav from '@/components/Navigation/SideNav'

export default {
  components: {
    AppHeader,
    SideNav
  },
  data() {
    return {
      displaySideNav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
