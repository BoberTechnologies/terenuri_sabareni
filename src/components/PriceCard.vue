<template>
  <div class="price-card">
    <img :src="image" alt="Card image" class="card-image" />

    <div class="card-bottom">
      <span class="price-text">{{ value }}€/m.p.</span>

      <div class="info-wrapper" ref="infoWrapper">
        <span
            class="info-icon"
            @mouseenter="onHover(true)"
            @mouseleave="onHover(false)"
            @click="onClickToggle"
        >
          i
        </span>

        <div v-if="showTooltip" class="tooltip">
          {{ tooltip }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  image: { type: String, required: true },
  value: { type: String, required: true },
  tooltip: { type: String, default: "" }
});

const showTooltip = ref(false);
const infoWrapper = ref(null);

function isTouchDevice() {
  return window.matchMedia("(pointer: coarse)").matches;
}

// Desktop hover handlers
function onHover(state) {
  if (!isTouchDevice()) {
    showTooltip.value = state;
  }
}

// Mobile click toggle
function onClickToggle(e) {
  if (isTouchDevice()) {
    e.stopPropagation(); // prevent global click from closing immediately
    showTooltip.value = !showTooltip.value;
  }
}

// Hide tooltip when clicking outside (mobile)
function handleClickOutside(e) {
  if (isTouchDevice() && infoWrapper.value && !infoWrapper.value.contains(e.target)) {
    showTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.price-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: 0.3s ease;
  margin:1.2rem;
  overflow: visible;
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
  background-color: #f8f8f8;
  color: gray;
  border-radius: 50%;
  border: 0.15rem solid gray;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
}

.tooltip {
  position: absolute;
  bottom: 150%;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  white-space: normal;       /* allow text to wrap */
  word-wrap: break-word;     /* break long words if necessary */
  z-index: 10;
  width: 1000%;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 0.8rem;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;
}

</style>
