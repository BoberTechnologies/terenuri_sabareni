import { createRouter, createWebHistory } from 'vue-router';
import About from './pages/About.vue';
import Plots from './pages/Plots.vue';
import Localize from './pages/Localize.vue';
import Home from './pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/plots', component: Plots },
  { path: '/localize', component: Localize },
  { path: '/contact', component: Home }, // Contact redirects to Home for now
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
