import { createRouter, createWebHistory } from 'vue-router';
import About from './pages/About.vue';
import Plots from './pages/Plots.vue';
import Localize from './pages/Localize.vue';
import Home from './pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/plots', component: Plots },
  { path: '/localize', component: Localize },
  { path: '/contact', component: Home },
];

const router = createRouter({
  history: createWebHistory('/terenuri_sabareni/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
});

export default router;