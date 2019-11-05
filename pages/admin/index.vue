<template>
  <div class="admin-page">
    <h1>Admin page</h1>
    <section class="new-post">
      <button @click="onCreateButtonClick">Create post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList is-admin></PostList>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: { PostList },
  methods: {
    onCreateButtonClick() {
      this.$router.push('/admin/new-post')
    }
  }
}
</script>

<style class="scoped">
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
