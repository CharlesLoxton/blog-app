import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/Home.vue';
import AboutView from './views/About.vue';
import ViewBlog from './views/ViewBlog.vue';
import BlogList from './views/BlogList.vue';
import CreateBlog from './views/CreateBlog.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/blog/view/:id', component: ViewBlog },
    { path: '/blog/list/:category', component: BlogList },
    { path: '/blog/create', component: CreateBlog }
  ]
})

createApp(App).use(router).mount('#app')
