<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail for the post</AppControlInput
    >
    <AppControlInput v-model="editedPost.content" control-type="textarea"
      >Content</AppControlInput
    >
    <AppControlInput v-model="editedPost.previewText" control-type="textarea"
      >Preview text</AppControlInput
    >
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin: 10px;"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
    <span class="last-modified"
      >Last modified on {{ editedPost.updatedDate }}</span
    >
  </form>
</template>
<script>
export default {
  name: 'AdminPostForm',
  props: {
    post: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            title: '',
            author: '',
            thumbnail: '',
            content: '',
            previewText: '',
            updatedDate: ''
          }
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/admin')
    },
    onSave() {
      this.$emit('submit', this.editedPost)
    }
  }
}
</script>

<style scoped>
.last-modified {
  display: block;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  color: #47494e;
  font-size: 0.75em;
  margin: 10px auto;
}
</style>
