<template>
  <div class="home-page">
    <section class="intro">
      <h1>
        Get the lastest tech news
      </h1>
    </section>
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/765105-technology-background-images-1920x1080-free-download.jpg');
  background-position: center;
  background-size: cover;
}
.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
@media (min-width: 768px) {
  .intro h1 {
    font-family: 'Fjalla One', sans-serif;
    font-size: 2rem;
  }
}
</style>
