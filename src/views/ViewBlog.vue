<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mb-3">
        <div class="card">
        <img :src="blog.image" class="card-img-top" alt="Blog Image" style="width: 200px; margin: auto;">
        <div class="card-body">
            <h5 class="card-title fw-bold">{{ blog.title }}</h5>
            <p class="card-text">{{ blog.text }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-muted">Written by: {{ blog.creator }}</li>
            <li class="list-group-item text-muted">Category: {{ blog.category }}</li>
            <li class="list-group-item text-muted">{{ blog.date }}</li>
        </ul>
        <div class="card-body">
            <router-link to="/" class="card-link">Go back</router-link>
            <router-link to="/blog/create" class="card-link">Create Blog</router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { blogs } from '../blog-data/blogs.js';

export default {
  name: 'ViewBlog',
  data() {
    return {
      blog: {}
    };
  },
  mounted() {
    this.blog = blogs.find(blog => blog.id == this.$route.params.id);
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
