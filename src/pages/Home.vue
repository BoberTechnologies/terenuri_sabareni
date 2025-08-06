<template>
  <div class="home-container">
    <BackgroundCard
      :background="homeImage"
      title="Welcome to Sabareni Plots"
      text="Discover available plots, learn about the area, and find your perfect land in Sabareni!"
      width="100%"
      height="100vh"
    />
  </div>
</template>

<script setup>
import BackgroundCard from '../components/BackgroundCard.vue';
import homeImage from '../../res/Home/Home_1.jpg';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}


.home-link {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background: #1976d2;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.home-link:hover {
  background: #1565c0;
}
</style>
