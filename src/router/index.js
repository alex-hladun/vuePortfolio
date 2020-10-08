import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/#about',
      component: About
    },
    {
      path: '/about',
      component: About
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
})

export default router