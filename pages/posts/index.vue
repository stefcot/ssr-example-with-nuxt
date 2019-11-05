<template>
  <div class="posts-page">
    <section>
      <h1>Posts page</h1>
    </section>
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: { PostList },
  asyncData(context, callback) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      // pass null as first argument otherwise gettings a error:
      // Unexpected literal in error position of callback  standard/no-callback-literal
      callback(null, {
        loadedPosts: [
          {
            id: 1,
            author: 'Stéphane Cottereau',
            title: 'What I think about Vue.js',
            previewText:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            thumbnail:
              '765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg'
          }
        ]
      })
    }, 5000)
  }
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
