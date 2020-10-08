import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import App from '../App.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/#about",
      component: About
    },
    {
      path: '/#projects',
      component: App
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return desired position
    if (to.hash) {
      console.log('to request received', to)
      // return {
      //   selector: to.hash
      //   // , offset: { x: 0, y: 10 }
      // }
    }
  }
})

export default router