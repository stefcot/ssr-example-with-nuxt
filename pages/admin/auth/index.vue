<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <AppControlInput type="email">Email address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <div class="auth-footer">
          <AppButton type="submit">{{
            isLogin ? 'Sign in' : 'Sign up'
          }}</AppButton>
          <AppButton
            type="button"
            btn-style="inverted"
            style="margin-left: 10px;"
            @click="isLogin = !isLogin"
            >Switch to {{ isLogin ? 'Sign in' : 'Sign up' }}</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  name: 'AdminAuthPage',
  data() {
    return {
      isLogin: true
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
