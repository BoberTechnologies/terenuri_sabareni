<template>
  <div :style="cardStyle" class="image-footer-card">
    <div class="image-section">
      <img :src="image" alt="card image" />
    </div>
    <div class="footer-section">
      <div class="footer-left">{{ text }}</div>
      <div class="footer-right">{{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageFooterCard',
  props: {
    image: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: String, required: true },
    width: { type: String, default: '320px' },
    height: { type: String, default: '260px' },
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        height: this.height,
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
      };
    },
  },
};
</script>

<style scoped>

.image-section {
  height: 75%;
  width: 100%;
  overflow: hidden;
}
.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.footer-section {
  height: 25%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-weight: 500;
  font-size: 1.1em;
}
.footer-left {
  color: #333;
}
.footer-right {
  color: #1a8917;
}
</style>

