<template>
  <div class="home-page">
    <section class="intro">
      <h1>
        Get the lastest tech news
      </h1>
    </section>
    <section class="featured-posts">
      <nuxt-link :to="'/posts/' + 1" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg') +
                ')'
            }"
          ></div>
          <div class="post-content">
            <h1>Post title 1</h1>
            <p>Preview post 1</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 2" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg') +
                ')'
            }"
          ></div>
          <div class="post-content">
            <h1>Post title 2</h1>
            <p>Preview post 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<style class="scoped">
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
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
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 0 3px #ccc;
  background-color: white;
  width: 100%;
  padding: 10px;
  margin: 20px;
}
a {
  text-decoration: none;
  color: black;
}
@media (min-width: 850px) {
  .post-preview {
    width: 400px;
  }
}
.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding: 10px;
  text-align: center;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
