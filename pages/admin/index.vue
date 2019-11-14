<template>
  <div class="admin-page">
    <h1>Admin page</h1>
    <section class="new-post">
      <AppButton @click="onCreateButtonClick">Create post</AppButton>
      <AppButton @click="onLogOutButtonClick">Log out</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList is-admin :posts="loadedPosts"></PostList>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { LOG_OUT } from '@/store/types'
export default {
  layout: 'admin',
  /*
   * Allows to attach a middleware execution to this page
   * Auth redirect if user is not authenticated
   */
  middleware: ['check-auth', 'auth'],
  computed: {
    ...mapGetters({ loadedPosts: 'loadedPosts' })
  },
  methods: {
    ...mapActions('user', {
      logout: LOG_OUT
    }),
    onCreateButtonClick() {
      this.$router.push('/admin/new-post')
    },
    onLogOutButtonClick() {
      this.logout()
      // Optional: will redirect to login screen
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding: 0 0 10px;
}
.existing-posts {
  text-align: center;
}
.existing-posts h1 {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #666666;
}
</style>
