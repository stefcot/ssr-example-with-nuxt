<template>
  <div class="single-post-page">
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post-details small">
        <div>Last uodated on XXX</div>
        <div>Written by NAME</div>
      </div>
      <p class="post-content">
        Content of the post.
      </p>
    </section>
    <section class="post-feedback">
      Please let me know what you think of this post, mail me to
      <a href="me@me.me" class="post-link-mail">me@me.me</a>
    </section>
  </div>
</template>

<style scoped>
.single-post-page {
  display: flex;
  width: 100%;
  flex-flow: column;
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
}
.post-content {
  display: block;
  padding: 0;
  margin: 0 0 10px;
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
