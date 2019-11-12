<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details small">
        <div>Last updated on {{ loadedPost.updatedDate | date }}</div>
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
  asyncData(context) {
    return context.app.$axios
      .$get(`/posts/${context.params.id}.json`)
      .then((data) => {
        // we use this way cause we actually MERGE the response with the default values of 'loadedPost'

        // With axios module we dont get the response but the data directly
        return {
          loadedPost: data
        }
      })
      .catch((err) => {
        context.error(err)
      })
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
