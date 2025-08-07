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

  <div class="carousel">
    <Carousel :images="homeImages"/>
  </div>

</template>

<script setup>
import BackgroundCard from '../components/BackgroundCard.vue'
import Carousel from '../components/Carousel.vue'

import homeImage from '../../res/Home/Home_1.jpg'

import img1 from '../../res/Home/Home_1.jpg'
import img2 from '../../res/Home/Home_2.jpg'
import img3 from '../../res/Home/Home_3.jpg'
import img4 from '../../res/Home/Home_4.jpg'
import img5 from '../../res/Home/Home_5.jpg'


const homeImages = [
  { image: img1, title: 'Welcome Home', paragraph: 'A beautiful place to relax and unwind.' },
  { image: img2 }, // No text
  { image: img3, title: 'Mountain View' },
  { image: img4, paragraph: 'Surrounded by nature and fresh air.' },
  { image: img5, title: 'City Lights', paragraph: 'Experience the vibrant city life.' }
]
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

.carousel{
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
