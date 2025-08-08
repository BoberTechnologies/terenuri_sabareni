<template>
  <div class="home-container">
    <BackgroundCard
        :background="homeImage"
        title="Welcome to Sabareni Plots"
        text="Discover available plots, learn about the area, and find your perfect land in Sabareni!"
        width="100%"
        height="100%"
        :fade-stops="[
    'rgba(0,0,0,1) 0%',
    'rgba(0,0,0,0.9) 70%',
    'rgba(0,0,0,0.7) 80%',
    'rgba(0,0,0,0) 100%']"
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
                      :fade-stops="[
    'rgba(0,0,0,0) 0%',
    'rgba(0,0,0,1) 20%',
    'rgba(0,0,0,1) 80%',
    'rgba(0,0,0,0) 100%']"
      />
    </div>
    <p>Some test text</p>
  </div>

  <div class="strips-content">
    <EdgeStrip center-text="Despre" right-text="Descoperă viziunea din spatele proiectului" to="/about" />
    <EdgeStrip center-text="Localizare" right-text="Explorează un loc ales cu grijă" to="/localize" />
    <EdgeStrip center-text="Terenuri" right-text="Alege locul unde visul tău prinde formă" to="/plots"/>
    <EdgeStrip center-text="Contact" right-text="Hai să luăm legătura" />
  </div>

  <div class="filler-content">
    <div class="filler-image">
      <BackgroundCard
          title="Titlu"
          text="text"
          width="100%"
          height="100%"
          :background="img7"
          :fade-stops="[
        'rgba(0,0,0,1) 0%',
        'rgba(0,0,0,1) 100%'
      ]"
      />
    </div>
  </div>

  <div>
    <image-card image=""/>
    <image-card image=""/>
    <image-card image=""/>
  </div>

</template>

<script setup>
import {
    BackgroundCard,
    Carousel,
    EdgeStrip,
    homeImage,
    img6,
    img7,
    homeImages
} from '../imports//homeImports.js'
import ImageCard from "@/components/ImageCard.vue";
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
  background: rgba(255, 255, 255, 0);
}

.carousel{
  margin-top: 25vh;
  margin-bottom: 25vh;
}

.section-content {
  display: flex;
  width: 100%;
  height: 100%; /* make sure container fills viewport height */
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
  background: rgba(255, 255, 255, 0.1);
}

.strips-content{
  margin-top: 10vh;
}

.filler-image {
  width: 100%;
  height: 50vh;
  /* Make this a flex container as well to center the card inside if needed */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  overflow: hidden;
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

  .filler-image {
    width: 100vw;
  }
}

</style>
