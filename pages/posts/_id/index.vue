<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details small">
        <div>Last updated on {{ loadedPost.upDatedDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">
        {{ loadedPost.content }}
      </p>
    </section>
    <section class="post-feedback">
      Please let me know what you think of this post, mail me to
      <a href="me@me.me" class="post-link-mail">me@me.me</a>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: 1,
          title: 'Post (ID #' + context.params.id + ')',
          previewText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'Stéphane Cottereau',
          upDatedDate: new Date(),
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          thumbnail:
            '765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg'
        }
      })
    }, 1000)
  }
}
</script>

<style scoped>
.single-post-page {
  display: flex;
  width: 100%;
  flex-flow: column;
  padding: 30px;
}
.post {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
}
h1 {
  font-family: 'Fjalla One', sans-serif;
  font-style: normal;
  font-size: 1.5em;
  color: #666;
  margin: 0 0 10px;
}
.post-details {
  display: flex;
  flex-flow: column;
}
.post-content {
  display: block;
  padding: 0;
  margin: 0 0 10px;
  text-align: left;
}
.post-feedback {
  font-style: italic;
  color: #000;
}
.post-link-mail {
  text-decoration: none;
  color: #35495e;
}
</style>
