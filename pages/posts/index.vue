<template>
  <div class="posts-page">
    <section>
      <h1>Posts page</h1>
    </section>
    <PostList></PostList>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: { PostList }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
