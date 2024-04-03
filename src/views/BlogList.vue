<template>
  <div class="container">
    <h2 class="fw-bold">Category: {{ category }}</h2>
    <CardList :blogs="filteredBlogs" />
  </div>
</template>

<script>
import CardList from '../components/CardList.vue';
import { blogs } from '../blog-data/blogs.js';

export default {
  name: 'BlogList',
  components: {
    CardList
  },
  data() {
    return {
      blogs,
      category: ''
    };
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => blog.category === this.category);
    }
  },
  watch: {
    '$route.params.category'(newCategory) {
      this.category = newCategory;
    }
  },
  created() {
    this.category = this.$route.params.category;
  }
};
</script>
