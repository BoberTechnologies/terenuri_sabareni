<template>
  <div class="about-page">
    <!-- HERO -->
    <div class="hero-section">
      <BackgroundCard
          title=""
          text=""
          :background="Street"
          width="100%"
          height="100vh"
          :fade-stops="[
          'rgba(0,0,0,1) 50%',
          'rgba(0,0,0,0) 100%'
        ]"
      />
      <div class="content-container">
        <div class="title-content">
          <h1 class="title">Title Here</h1>
        </div>
        <div class="text-content">
          <h2 class="subtitle">Subtitle Here</h2>
          <p class="paragraph">
            <!-- Your text... -->
          </p>
        </div>
      </div>
    </div>

    <!-- PRICE CAROUSEL SECTION -->
    <h2 class="carousel-heading">Available Plots</h2>

    <div class="teren1">
      <div class="section-content">
        <div class="section-image">
          <BackgroundCard title="Sectiune"
                          text="O noua Sectiune"
                          :background="img6"
                          height="100%"
                          width="100%"
                          :fade-stops="[
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,1) 50%',
          'rgba(0,0,0,0) 100%']"
          />
        </div>
        <p>Some test text</p>
      </div>
      <section class="carousel-section">
        <PriceCarousel :cards="cardData" />
      </section>
    </div>

    <div class="teren2">
      <div class="section-content">
        <div class="section-image">
          <BackgroundCard title="Sectiune"
                          text="O noua Sectiune"
                          :background="img6"
                          height="100%"
                          width="100%"
                          :fade-stops="[
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,1) 50%',
          'rgba(0,0,0,0) 100%']"
          />
        </div>
        <p>Some test text</p>
      </div>
      <section class="carousel-section">
        <PriceCarousel :cards="cardData" />
      </section>
    </div>

    <div class="teren3">
      <div class="section-content">
        <div class="section-image">
          <BackgroundCard title="Sectiune"
                          text="O noua Sectiune"
                          :background="img6"
                          height="100%"
                          width="100%"
                          :fade-stops="[
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,1) 50%',
          'rgba(0,0,0,0) 100%']"
          />
        </div>
        <p>Some test text</p>
      </div>
      <section class="carousel-section">
        <PriceCarousel :cards="cardData" />
      </section>
    </div>


  </div>
</template>

<script>
import Street from '@/../res/Home/street.jpg';
import BackgroundCard from "@/components/BackgroundCard.vue";
import PriceCarousel from "@/components/PriceCarousel.vue";
import {img6} from "@/imports/homeImports.js";

export default {
  name: 'PlotsPage',
  components: { PriceCarousel, BackgroundCard },
  data() {
    return {
      cardData: [
        { image: Street, value: "30", tooltip: "Basic package" },
        { image: Street, value: "45", tooltip: "Premium package" },
        { image: Street, value: "50", tooltip: "Luxury finish" }
      ],
      img6: img6,
      Street: Street,
    }
  },
};
</script>

<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* HERO */
.hero-section {
  position: relative;
  height: 100vh;
}

.content-container {
  position: absolute;
  inset: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  pointer-events: none;
}

.title-content {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.title {
  font-size: 4rem;
  margin: 0;
  pointer-events: auto;
}

.text-content {
  position: absolute;
  top: 40%;
  left: 5%;
  width: 90%;
  max-height: 100%;
  text-align: left;
  pointer-events: auto;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 10px;
}

.paragraph {
  font-size: 1rem;
  line-height: 1.6;
}

/* PRICE CAROUSEL SECTION */
.carousel-section {
  position: relative;
  padding: 3rem 0;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.carousel-heading {
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
  font-size: 2rem;
  color: #333;
}

.section-image {
  height: 50vh;
  width: 50vw;
  flex-shrink: 0; /* don't shrink the image container */
  background: rgba(255, 255, 255, 0.1);
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

@media (orientation: portrait) {
  .title {
    font-size: 2.5rem;
  }
  .text-content {
    width: 90%;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    max-height: 40%;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .paragraph {
    font-size: 0.9rem;
  }
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
</style>
