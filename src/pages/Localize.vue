<template>
  <div class="localize-page">
    <h1>Localize</h1>
    <p>This is the Localize page.</p>

    <div class="map-wrapper">
      <Map
          :pins="[
          { lat: 44.52629, lng: 25.90025, label: 'Str. Frasinului' },
          { lat: 44.53237, lng: 25.87872, label: 'Str. Cereanca' },
          { lat: 44.52424, lng: 25.88751, label: 'Str. Salciei' }
        ]"
          :zoom="6"
          :pulse="true"
      />
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'LocalizePage',
  components: { Map },
}
</script>

<style scoped>
.localize-page {
  display: flex;
  flex-direction: column;
  align-items: center; /* centers content horizontally */
  padding: 2rem;
}

.map-wrapper {
  height: 60vh;
  width: 80vw;
}

@media (orientation: portrait) {
  .map-wrapper {
    height: 30vh;
    width: 90vw;
  }
}
</style>
