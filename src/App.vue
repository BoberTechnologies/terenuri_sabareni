<script setup>
import TopNavbar from './components/TopNavbar.vue';
import BurgerMenu from './components/BurgerMenu.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <TopNavbar />
  <BurgerMenu />
  <div>
    <router-view />
  </div>
  <FooterBar />
</template>

<style scoped>

body {
  font-family: 'Segoe UI', Arial, sans-serif;
}
</style>
