<template>
  <div class="price-card" ref="cardRef">
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
      </div>
    </div>
    <!-- Teleport the tooltip to body -->
    <teleport to="body">
      <div
        v-if="showTooltip"
        class="tooltip teleport-tooltip"
        :style="tooltipStyle"
      >
        {{ tooltip }}
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";

const props = defineProps({
  image: { type: String, required: true },
  value: { type: String, required: true },
  tooltip: { type: String, default: "" }
});

const showTooltip = ref(false);
const infoWrapper = ref(null);
const cardRef = ref(null);
const tooltipStyle = ref({});

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

function updateTooltipPosition() {
  nextTick(() => {
    if (!showTooltip.value || !cardRef.value) return;
    const cardRect = cardRef.value.getBoundingClientRect();
    tooltipStyle.value = {
      position: 'absolute',
      left: cardRect.left + window.scrollX + 'px',
      top: (cardRect.top + window.scrollY - 48) + 'px', // 48px above card, adjust as needed
      width: cardRect.width + 'px',
      zIndex: 1000
    };
  });
}

watch(showTooltip, (val) => {
  if (val) updateTooltipPosition();
});

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
  cursor: pointer;
  user-select: none;
}

.tooltip {
  /* Remove position, bottom, right, width from here for teleport */
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  white-space: normal;
  word-wrap: break-word;
  z-index: 10;
  box-sizing: border-box;
}
.teleport-tooltip::after {
  content: "";
  position: absolute;
  left: 1.2rem;
  bottom: -10px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent;
}
</style>
