<template>
  <div class="admin-post-page">
    <h1>Post admin page</h1>
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmit"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { EDIT_POST } from '@/store/types'
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
    return context.app.$axios
      .$get(`/posts/${context.params.postId}.json`)
      .then((data) => {
        // Merging loadedPost as well as in '/posts/_id' page

        // Here we store an id locally for each records during user interaction
        // to fetch, compare, update, delete, etc
        // It wont be written in the json firebase DB cause it's actually the entry where the record is stored.

        // With axios module we dont get the response but the data directly
        return {
          loadedPost: { ...data, id: context.params.postId } // seems to be better than res.data.name
        }
      })
      .catch((err) => {
        context.error(err)
      })
  },
  methods: {
    ...mapActions({ editPost: EDIT_POST }),
    onSubmit(postData) {
      this.editPost(postData).then(() => {
        this.$router.push('/admin')
      })
    }
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
