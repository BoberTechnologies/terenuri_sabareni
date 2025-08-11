<template>
  <div style="background: transparent">
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
        display: 'inline-block',
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap');

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
  margin: 1rem;
  max-width: 100%;
  word-break: break-word;
}

.image-title {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Bitter",serif;
  text-align: center;
}

.image-paragraph {
  font-size: 1rem;
  color: #444;
  font-family: Merriweather,serif;
  text-align: justify;
}

</style>
