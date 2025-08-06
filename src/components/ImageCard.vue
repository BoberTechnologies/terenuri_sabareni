<template>
  <div :style="cardStyle" class="image-card">
    <img :src="image" alt="card image" style="width:100%;height:100%;object-fit:cover;" />
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    image: { type: String, required: true },
    width: { type: String, default: '300px' },
    height: { type: String, default: '200px' },
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        height: this.height,
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      };
    },
  },
};
</script>

<style scoped>
.image-card {
  display: flex;
}
</style>

