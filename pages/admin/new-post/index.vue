<template>
  <div class="admin-new-post-page">
    <section>
      <h1>New post</h1>
    </section>
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail"
          >Thumbnail for the post</AppControlInput
        >
        <AppControlInput v-model="editedPost.content" control-type="textarea"
          >Content</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin: 10px;"
          btn-style="cancel"
          @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  components: {
    AppButton,
    AppControlInput
  },
  data() {
    return {
      editedPost: {
        title: '',
        author: '',
        thumbnail: '',
        content: ''
      }
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/admin')
    },
    onSave() {}
  }
}
</script>

<style class="scpoed">
.admin-new-post-page {
  padding: 30px;
}
</style>
