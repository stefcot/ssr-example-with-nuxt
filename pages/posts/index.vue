<template>
  <div class="posts-page">
    <section>
      <h1>Posts page</h1>
    </section>
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostList from '@/components/Posts/PostList'

export default {
  components: { PostList },
  computed: {
    ...mapGetters({ loadedPosts: 'loadedPosts' })
  }
  // /**
  //  * Nuxt option that works the same as asyncData, fetch on server once and on client several times after.
  //  * IMPORTANT: initialize the store instead of merging received data with data option.
  //  * @param context
  //  * @returns {Promise<any | never>}
  //  */
  // fetch(context) {
  //   // Here the second callback arguments has been removed to keep nuxt from waiting its execution.
  //   // If the promise is rejected, the page will be redirected to the error page.
  //   return new Promise((resolve) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       // pass null as first argument otherwise getting an error due to eslint rule:
  //       // Unexpected literal in error position of callback  standard/no-callback-literal
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: 1,
  //             author: 'Stéphane Cottereau',
  //             title: 'What I think about Vue.js',
  //             previewText:
  //               "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.",
  //             thumbnail:
  //               '765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg'
  //           },
  //           {
  //             id: 2,
  //             author: 'Stéphane Cottereau',
  //             title: 'What I thought about Vue.js & Nuxt.js',
  //             previewText:
  //               'With Nuxt.js, your application will be optimized out of the box. We do our best to build performant applications by utilizing Vue.js and Node.js best practices. To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.',
  //             thumbnail:
  //               '765105-technology-background-images-1920x1080-free-download.jpg'
  //           }
  //         ]
  //       })
  //     }, 5000)
  //     // reject(new Error()) // For some reason something went south
  //   })
  //     .then((data) => {
  //       context.store.commit(SET_POSTS, data.loadedPosts)
  //     })
  //     .catch((err) => {
  //       context.error(new Error(err))
  //     })
  // },
  // methods: {
  //   ...mapActions({ setPosts: SET_POSTS })
  // }
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
