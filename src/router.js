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

// Use the same base as your GitHub Pages repo name
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/terenuri_sabareni/'),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
