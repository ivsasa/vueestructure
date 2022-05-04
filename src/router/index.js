import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
    return import('../views/AboutView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
    return import('../views/ContactView.vue')
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: function () {
    return import('../views/GalleryView.vue')
    },

  }
  

  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
