<template>
  <div class="row">
    <!-- Check if blogs array is empty -->
    <div v-if="blogs.length === 0">
      No blogs found
    </div>
    <!-- If not empty, display the blogs -->
    <div v-else class="col-md-4 mb-3" v-for="blog in blogs" :key="blog.id">
        <BlogCard
          :id="blog.id"
          :title="blog.title"
          :text="blog.text"
          :image="blog.image"
        />
    </div>
  </div>
</template>

<script>
import BlogCard from './Card.vue';

export default {
  name: 'CardList',
  components: {
    BlogCard
  },
  props: {
    blogs: [String]
  }
};
</script>
