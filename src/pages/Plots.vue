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
    <section class="carousel-section">
      <h2 class="carousel-heading">Available Plots</h2>
      <PriceCarousel :cards="cardData" />
    </section>
  </div>
</template>

<script>
import Street from '@/../res/Home/street.jpg';
import BackgroundCard from "@/components/BackgroundCard.vue";
import PriceCarousel from "@/components/PriceCarousel.vue";

export default {
  name: 'PlotsPage',
  components: { PriceCarousel, BackgroundCard },
  data() {
    return {
      cardData: [
        { image: Street, value: "30", tooltip: "Basic package" },
        { image: Street, value: "45", tooltip: "Premium package" },
        { image: Street, value: "50", tooltip: "Luxury finish" }
      ]
    }
  },
  computed: {
    Street() {
      return Street;
    }
  }
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
}

.carousel-heading {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
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
}
</style>
