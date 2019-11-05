<template>
  <div class="admin-post-page">
    <h1>Post admin page</h1>
    <section class="update-form">
      <AdminPostForm :post="loadedPost"></AdminPostForm>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Stéphane Cottereau',
        title: 'What I think about Vue.js',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        thumbnail:
          '765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg'
      }
    }
  }
}
</script>

<style class="scoped">
.admin-post-page {
  padding: 30px;
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
