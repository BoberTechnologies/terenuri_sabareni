<template>
  <div :style="cardStyle" class="background-card">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundCard',
  props: {
    background: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    width: { type: String, default: '350px' },
    height: { type: String, default: '220px' },
  },
  computed: {
    cardStyle() {
      return {
        width: this.width,
        height: this.height,
        backgroundImage: `url(${this.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-end',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      };
    },
  },
};
</script>

<style scoped>
.background-card {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.background-card .content {
  background: rgba(0,0,0,0.4);
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 2;
}
</style>
