<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm></AdminPostForm>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
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
