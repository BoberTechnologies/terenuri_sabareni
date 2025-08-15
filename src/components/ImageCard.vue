<template>
  <div class="image-card-wrapper">
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
        textAlign: 'center',
        // Removed display: 'inline-block'
      };
    },
  },
};
</script>

<style scoped>

.image-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  background: none;
  margin: 1rem;
  transition: transform 0.2s ease-in-out;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.image-card:hover{
  transform: scale(1.1);
}

.text-content {
  margin: 1rem 0;
  width: 20vw;
  word-break: break-word;
  text-align: center;
}

.image-title {
  text-align: center;
}

.image-paragraph {
  text-align: justify;
}

@media (orientation: portrait) {
  .text-content {
    width: 80vw;
  }
}

</style>