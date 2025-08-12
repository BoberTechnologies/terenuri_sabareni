<template>
  <div class="plots-page">
    <h1>Terenuri</h1>
    <p>This is the Plots page.</p>

    <div class="section-content">
      <div class="section-image">
        <BackgroundCard title="Sectiune"
                        text="O noua Sectiune"
                        :background="img6"
                        height="100%"
                        width="100%"
                        :fade-stops="[
    'rgba(0,0,0,0) 0%',
    'rgba(0,0,0,1) 20%',
    'rgba(0,0,0,1) 80%',
    'rgba(0,0,0,0) 100%']"
        />
      </div>
      <p>Some test text</p>
    </div>
  </div>
</template>

<script>
import {BackgroundCard, img6} from "@/imports/homeImports.js";

export default {
  name: 'PlotsPage',
  components: {BackgroundCard},
  computed: {
    img6() {
      return img6
    }
  },
};
</script>

<style scoped>
.plots-page {
  margin-top: 80px;
  padding: 0;
}

.section-content {
  display: flex;
  width: 100%;
  height: 100%; /* make sure container fills viewport height */
}

.section-content p{
  flex: 1;
  font-size: 1.2rem;
  align-self: center;
  text-align: center;
  justify-content: center;
  display: flex;
}

.section-image {
  height: 100vh;
  width: 40vw;
  flex-shrink: 0; /* don't shrink the image container */
  background: rgba(255, 255, 255, 0.1);
}
</style>

