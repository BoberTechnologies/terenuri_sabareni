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

    // Fade direction: 'to bottom', 'to top', etc.
    fadeDirection: {
      type: String,
      default: 'to bottom',
    },

    // Custom gradient stops
    fadeStops: {
      type: Array,
      default: () => [
        'rgba(0,0,0,1) 0%',
        'rgba(0,0,0,0) 100%',
      ],
    },
  },
  computed: {
    cardStyle() {
      const gradient = `linear-gradient(${this.fadeDirection}, ${this.fadeStops.join(', ')})`;

      return {
        width: this.width,
        height: this.height,
        backgroundImage: `url(${this.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-end',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        WebkitMaskImage: gradient,
        maskImage: gradient,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        backgroundRepeat: 'no-repeat',
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
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem !important;
}

.background-card .content h2 {
  /* Remove local font styles, use global .title or .subtitle if needed */
  margin: 0 0 0.5em 0;
}

.background-card .content p {
  /* Remove local font styles, use global .paragraph */
  margin-top: 0.5rem;
  margin-bottom: 0;
  line-height: 1.4;
  overflow: visible;
  text-align: left;
}
</style>
