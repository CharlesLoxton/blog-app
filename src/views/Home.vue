<template>
  <div class="container">
    <div class="card mb-2">
      <h1 class="fw-bold">Welcome to Blogger</h1>
      <h4>You can view all the latest blogs about <span class="text-primary">Technology, Nature, Food</span> and much more!</h4>
    </div>
    <CardList
        :blogs="blogs"
      />
  </div>
</template>

<script>
import CardList from '../components/CardList.vue';
import { blogs } from '../blog-data/blogs.js';

export default {
  name: 'HomeView',
  components: {
    CardList
  },
  data() {
    return {
      blogs
    };
  }
};
</script>
