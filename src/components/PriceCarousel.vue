<template>
  <div class="carousel-container">
    <button @click="scrollLeft" class="nav-icon-button left-button">
      <img :src="leftIcon" alt="Left" class="nav-icon" />
    </button>

    <div ref="scrollContainer" class="image-series">
      <PriceCard
          v-for="(item, index) in cards"
          :key="index"
          class="custom-card"
          :image="item.image"
          :value="item.value"
          :tooltip="item.tooltip"
      />
    </div>

    <button @click="scrollRight" class="nav-icon-button right-button">
      <img :src="rightIcon" alt="Right" class="nav-icon" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PriceCard from "./PriceCard.vue";
import leftIcon from "../../res/Icons/left.svg";
import rightIcon from "../../res/Icons/right.svg";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    // Format: [{ image: '...', value: '...', tooltip: '...' }]
  }
});

const scrollContainer = ref(null);
const scrollAmount = 500;

function scrollLeft() {
  scrollContainer.value?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function scrollRight() {
  scrollContainer.value?.scrollBy({ left: scrollAmount, behavior: "smooth" });
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.image-series {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  gap: 10vw;
  padding: 0 5vw;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.image-series::-webkit-scrollbar {
  display: none;
}

.custom-card {
  flex-shrink: 0;
  box-sizing: border-box;
  width: max(20vw, 20vh);
  height: 30vh; /* Card height */
}

.nav-icon-button {
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
  line-height: 0;
}

.nav-icon {
  width: min(5vw, 5vh);
  filter: brightness(0) drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
  transition: filter 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.nav-icon-button:hover .nav-icon {
  opacity: 0.6;
  filter: invert(1) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  transform: scale(1.1);
}

.left-button {
  left: 2rem;
}

.right-button {
  right: 2rem;
}
</style>
