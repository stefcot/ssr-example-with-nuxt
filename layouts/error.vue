<template>
  <div class="error-page">
    <h1>Opps, something when wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: #f00;
}

.error-page a:active,
.error-page a:hover {
  color: #f60;
}
</style>
