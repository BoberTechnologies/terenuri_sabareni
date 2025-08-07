<template>
  <div class="home-container">
    <BackgroundCard
        :background="homeImage"
        title="Welcome to Sabareni Plots"
        text="Discover available plots, learn about the area, and find your perfect land in Sabareni!"
        width="100%"
        height="100%"
    />
  </div>

  <div class="carousel">
    <Carousel :images="homeImages"/>
  </div>

  <div class="section-content">
    <div class="section-image">
      <BackgroundCard title="Sectiune"
                      text="O noua Sectiune"
                      :background="img6"
                      height="100%"
                      width="100%"
      />
    </div>
    <p>Some test text</p>
  </div>

  <div class="strips-content">
    <EdgeStrip left-text="01" center-text="test" right-text="some more test text" />
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
import img6 from '../../res/Home/Home_6.jpg'
import EdgeStrip from "@/components/EdgeStrip.vue";

const homeImages = [
  { image: img1, title: 'Utilitati pregatite', paragraph: 'Gaze naturale si energie electrica, fara griji sau batai de cap' },
  { image: img2, title: 'Drumuri amenajate', paragraph: 'Acces facil, chiar si in cele mai ploioase zile' }, // No text
  { image: img3, title: 'Autorizatii de constructie', paragraph: 'Poti incepe constructia imediat' },
  { image: img4, title: 'Padurea Cereanca', paragraph: 'Perfect pentru plimbari in aer liber si liniste deplina' },
  { image: img5, title: 'Totul gata, doar pentru tine', paragraph: '18 luni de munca intensa, proiectare, avizari si executii pentru ca tu sa poti incepe constructia fara batai de cap' }
]
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  height: 100vh;
  text-align: center;
}

.carousel{
  margin-top: 25vh;
  margin-bottom: 25vh;
}

.section-content {
  display: flex;
  width: 100vw;
  height: 100vh; /* make sure container fills viewport height */
}

.section-content p{
  flex: 1;
  font-size: 1.2rem;
  align-self: center;
  text-align: center;
  justify-content: center;
  display: flex;
}

.section-image {
  height: 100vh;
  width: 40vw;
  flex-shrink: 0; /* don't shrink the image container */
}



@media (orientation: portrait) {
  .section-image {
    width: 100vw;
    height: 40vh;
  }
  .section-content{
    display: block;
  }
  .section-content p{
    display: inline-block;
  }
}

.strips-content{
  margin-top: 10vh;
}

</style>
