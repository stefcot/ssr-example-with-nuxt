<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email"
          >Email address</AppControlInput
        >
        <AppControlInput v-model="password" type="password"
          >Password</AppControlInput
        >
        <div class="auth-footer">
          <AppButton type="submit">{{
            isLogin ? 'Login' : 'Sign up'
          }}</AppButton>
          <AppButton
            type="button"
            btn-style="inverted"
            style="margin-left: 10px;"
            @click="isLogin = !isLogin"
            >Switch to {{ isLogin ? 'Sign up' : 'Sign in' }}</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { AUTHENTICATE_USER } from '@/store/types'
export default {
  layout: 'admin',
  name: 'AdminAuthPage',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', {
      authenticateUser: AUTHENTICATE_USER
    }),
    /**
     * Google API firebase hosted signin REST API entry point:
     * `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseApiKey}`,
     */
    onSubmit() {
      this.authenticateUser({
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      }).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped="true">
.admin-auth-page {
  padding: 30px;
}

.auth-container {
  display: flex;
  flex-flow: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
.auth-footer {
  display: flex;
  justify-content: center;
}
</style>
