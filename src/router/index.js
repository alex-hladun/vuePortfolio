import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import App from "../App.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/#about",
      component: About
    },
    {
      path: "/#projects",
      component: App
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
    }
  }
});

export default router;
