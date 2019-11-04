<template>
  <div class="home-page">
    <section class="intro">
      <h1>
        Get the lastest tech news
      </h1>
    </section>
    <section class="featured-posts">
      <post-preview
        :id="1"
        title="First post"
        preview-text="Some greta explanation"
        thumbnail="765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg"
      ></post-preview>
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: { PostPreview }
}
</script>

<style class="scoped">
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/765105-technology-background-images-1920x1080-free-download.jpg');
  background-position: center;
  background-size: cover;
}
.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
@media (min-width: 768px) {
  .intro h1 {
    font-family: 'Fjalla One', sans-serif;
    font-size: 2rem;
  }
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
