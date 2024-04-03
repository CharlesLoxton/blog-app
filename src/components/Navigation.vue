<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mynav">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Blogger</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/" exact :class="{ active: $route.path === '/' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" :class="{ active: $route.path === '/about' }">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/dropdown" :class="{ active: $route.path.startsWith('/blog/list') }">
              Categories
            </router-link>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/blog/list/Technology">Technology</router-link></li>
              <li><router-link class="dropdown-item" to="/blog/list/Food">Food</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog/create" :class="{ active: $route.path === '/blog/create' }">Create Blog</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search" @submit.prevent="search">
          <input v-model="searchText" class="form-control me-2" type="search" placeholder="Search for category" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>



<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      searchText: '' // Initialize searchText to hold the search query
    };
  },
  methods: {
    search() {
      if (this.searchText.trim() !== '') {
        this.$router.push(`/blog/list/${this.searchText}`);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mynav {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
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
