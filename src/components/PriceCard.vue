<template>
  <div class="price-card">
    <img :src="image" alt="Card image" class="card-image" />

    <div class="card-bottom">
      <span class="price-text">{{ value }}€/mp</span>

      <div class="info-wrapper">
        <span class="info-icon" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">i</span>
        <div v-if="showTooltip" class="tooltip">
          {{ tooltip }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  image: { type: String, required: true },
  value: { type: String, required: true },
  tooltip: { type: String, default: "" }
});

const showTooltip = ref(false);
</script>

<style scoped>
.price-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: 0.3s ease;
  margin: 1.2rem;
}

.price-card:hover {
  transform: scale(1.1);
}

.card-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  height: 30%;
  background-color: #f8f8f8;
}

.price-text {
  font-weight: bold;
  font-size: 1rem;
}

.info-wrapper {
  position: relative;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  font-size: 0.9rem;
  cursor: pointer;
  user-select: none;
}

.tooltip {
  position: absolute;
  bottom: 150%;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 10;
  transform: translateY(-2px);
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 0.4rem;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;
}
</style>
