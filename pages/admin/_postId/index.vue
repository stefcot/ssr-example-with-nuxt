<template>
  <div class="admin-post-page">
    <h1>Post admin page</h1>
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmit"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'No name found',
        title: 'No title found',
        content: 'No content found',
        thumbnail: 'No thumbnail found',
        previewText: 'No preview text found',
        updatedDate: 'No updated date found'
      }
    }
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-db-post.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then((res) => {
        // Merging loadedPost as well as in '/posts/_id' page
        return {
          loadedPost: res.data
        }
      })
      .catch((err) => {
        context.error(err)
      })
  },
  methods: {
    onSubmit(postData) {}
  }
}
</script>

<style scoped>
.admin-post-page {
  padding: 30px;
}

.admin-post-page h1 {
  text-align: center;
}

.update-form {
  margin: 0 auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
