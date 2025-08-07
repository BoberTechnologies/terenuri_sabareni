<template>
  <div>
  <div :style="cardStyle" class="image-card">
    <img :src="image" alt="card image" />
  </div>
  <div v-if="$slots.title || $slots.paragraph" class="text-content">
    <h4 v-if="$slots.title" class="image-title">
      <slot name="title" />
    </h4>
    <p v-if="$slots.paragraph" class="image-paragraph">
      <slot name="paragraph" />
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    image: { type: String, required: true },
    width: { type: String, default: 'auto' },
    height: { type: String, default: 'auto' },
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        height: this.height,
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        textAlign: 'center',
      };
    },
  },
};
</script>

<style scoped>
.image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: max(20vw, 20vh);
  height: auto;
  object-fit: fill;
}

.text-content {
  margin: 1rem;
}

.image-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.3rem 0;
}

.image-paragraph {
  font-size: 0.95rem;
  color: #444;
  margin: 0;
}
</style>
