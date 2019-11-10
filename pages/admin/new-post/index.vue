<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ADD_POST } from '@/store/types'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    ...mapActions({ addPost: ADD_POST }),
    onSubmit(postData) {
      this.addPost(postData).then(() => {
        this.$router.push('/admin')
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
