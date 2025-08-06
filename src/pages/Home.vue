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

  <div class="scroll-elements">
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :slide-ratio="1 / 4"
        :dragging-distance="70"
    >
      <vueper-slide
          v-for="(img, i) in slideImages"
          :key="i"
      >
        <!-- Optional title slot -->
        <template #title>
          Plot {{ i + 1 }}
        </template>

        <!-- Content slot with ImageCard -->
        <template #content>
          <ImageCard
              :image="img"
              width="auto"
              height="30vh"
          />
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import BackgroundCard from '../components/BackgroundCard.vue'
import ImageCard from '../components/ImageCard.vue'

import homeImage from '../../res/Home/Home_1.jpg'
import plot1 from '../../res/Home/Home_1.jpg'
import plot2 from '../../res/Home/Home_2.jpg'
import plot3 from '../../res/Home/Home_3.jpg'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// Example list of images for the slides
const slideImages = [
  plot1,
  plot2,
  plot3,
  plot1,
  plot2,
  plot3
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
</style>
