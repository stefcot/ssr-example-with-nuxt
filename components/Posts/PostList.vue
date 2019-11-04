<template>
  <section class="posts-list">
    <post-preview
      :id="1"
      title="First post"
      preview-text="Some greta explanation"
      thumbnail="765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg"
    ></post-preview>
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  name: 'PostList',
  components: { PostPreview }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
