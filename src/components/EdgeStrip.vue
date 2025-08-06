<template>
  <div class="edge-strip" :style="stripStyle">
    <div class="strip-left">{{ leftText }}</div>
    <div class="strip-center">{{ centerText }}</div>
    <div class="strip-right">{{ rightText }}</div>
  </div>
</template>

<script>
export default {
  name: 'EdgeStrip',
  props: {
    leftText: { type: String, required: true },
    centerText: { type: String, required: true },
    rightText: { type: String, required: true },
    background: { type: String, default: '#f5f5f5' },
    color: { type: String, default: '#222' },
  },
  computed: {
    stripStyle() {
      return {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: this.background,
        color: this.color,
        padding: '8px 24px',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
      };
    },
  },
};
</script>

<style scoped>
.edge-strip {
  width: 100%;
}
.strip-left {
  font-size: 0.9em;
  flex: 1;
}
.strip-center {
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  flex: 2;
}
.strip-right {
  font-size: 1em;
  text-align: right;
  flex: 2;
}
</style>

