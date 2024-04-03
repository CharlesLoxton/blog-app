<template>
<div class="card">
  <img :src="image" class="card-img-top" alt="Blog Image" style="width: 200px; margin: auto;">
  <div class="card-body">
    <h5 class="card-title fw-bold">{{ title }}</h5>
    <p class="card-text">{{ truncatedText }}</p>
    <router-link :to="'/blog/view/' + id" class="btn btn-primary">Read More</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    id: Number,
    title: String,
    text: String,
    image: String
  },
  computed: {
    truncatedText() {
      const maxLength = 100;
      if (this.text.length > maxLength) {
        return this.text.slice(0, maxLength) + '...';
      } else {
        return this.text;
      }
    }
  }
}
</script>
