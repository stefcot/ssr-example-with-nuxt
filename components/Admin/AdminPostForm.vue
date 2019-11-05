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
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin: 10px;"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>
<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  name: 'AdminPostForm',
  components: {
    AppButton,
    AppControlInput
  },
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

<style scoped></style>
