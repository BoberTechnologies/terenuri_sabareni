<script setup>
import TopNavbar from './components/TopNavbar.vue';
import BurgerMenu from './components/BurgerMenu.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <TopNavbar />
  <BurgerMenu />
  <div class="container">
    <router-view />
  </div>
  <FooterBar />
</template>

<style>
html, body {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 16px;
  color: #222;
  background: #fff;
  margin: 0;
  padding: 0;
}

body, input, button, textarea, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
}
h3 {
  font-size: 1.5rem;
  font-weight: 500;
}
p, li, a, span, label, .paragraph, .subtitle {
  font-size: 1rem;
  font-weight: 400;
}

.container {
  min-height: 80vh;
}
</style>
