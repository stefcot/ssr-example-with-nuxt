<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit"></AdminPostForm>
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
  methods: {
    onSubmit(postData) {
      axios
        .post('https://nuxt-db-post.firebaseio.com/posts.json', {
          ...postData,
          updatedDate: new Date()
        })
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log('on success - result: ', result)
          this.$router.push('/posts/')
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err)
        })
    }
  }
}
</script>

<style class="scpoed">
.admin-new-post-page {
  padding: 30px;
}
.new-post-form {
  margin: 0 auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
