<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{
          backgroundImage:
            'url(' + require(`@/assets/images/${thumbnail}`) + ')'
        }"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style class="scoped">
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 0 3px #ccc;
  background-color: white;
  width: 100%;
  padding: 10px;
  margin: 20px;
}
.post-preview h1 {
  font-family: 'Fjalla One', sans-serif;
}
a {
  text-decoration: none;
  color: black;
}
@media (min-width: 850px) {
  .post-preview {
    width: 400px;
  }
}
.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding: 10px;
  text-align: center;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
