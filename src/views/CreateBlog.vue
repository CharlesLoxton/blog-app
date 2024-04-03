<template>
  <div class="container">
    <h3 class="fw-bold">Create a blog post.</h3>
    <form @submit.prevent="submitBlog">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input v-model="title" type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" required>
      </div>
      <div class="form-text" id="basic-addon4">Please create a title for your blog post.</div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Category</span>
        <input v-model="category" type="text" class="form-control" placeholder="Category" aria-label="Title" aria-describedby="basic-addon1" required>
      </div>
      <div class="form-text" id="basic-addon4">Please create a category for your blog post.</div>
      <div class="input-group">
        <span class="input-group-text">Blog Content</span>
        <textarea v-model="content" class="form-control" aria-label="With textarea" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Post Blog</button>
    </form>
  </div>
</template>

<script>
import { blogs } from '../blog-data/blogs.js';

export default {
  name: 'CreateBlog',
  data() {
    return {
      title: '',
      category: '',
      content: '',
      blogs
    };
  },
  methods: {
    submitBlog() {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      const newBlog = {
        id: this.blogs.length + 1,
        title: this.title,
        category: this.category,
        text: this.content,
        date: formattedDate,
        creator: 'Charles Loxton',
        image: require('@/assets/logo.png'),
      };
      this.blogs.push(newBlog);
      // You may want to clear the form fields after submission
      this.$router.push(`/blog/view/${newBlog.id}`);
    }
  }
};
</script>