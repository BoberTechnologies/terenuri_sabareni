<template>
  <div class="localize-page">
    <!-- Secțiunea de informații -->
    <div class="content">
      <h1>Descoperă locațiile proiectului</h1>
      <p>
        Vizualizează pe hartă principalele puncte de interes din cadrul complexului imobiliar. Selectează orice locație pentru a primi indicații de orientare și detalii despre accesibilitate.
      </p>
    </div>

    <!-- Secțiunea hartă -->
    <div class="map-wrapper">
      <Map
          :pins="[
          { lat: 44.52629, lng: 25.90025, label: 'Str. Frasinului' },
          { lat: 44.53237, lng: 25.87872, label: 'Str. Cereanca' },
          { lat: 44.52424, lng: 25.88751, label: 'Str. Salciei' }
        ]"
          :pulse="true"
      />
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'LocalizePage',
  mounted() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  },
  components: { Map },
}
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

/* Layout principal */
.localize-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* conținut sus, hartă jos */
  height: 100vh; /* ocupă întreaga înălțime a ecranului */
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9; /* fundal plăcut, neutru */
  font-family: 'Segoe UI', Roboto, sans-serif;
}

/* Secțiunea textuală */
.content {
  text-align: center;
  margin-bottom: 1rem;
}

.content h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.content p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
}

/* Secțiunea hartă */
.map-wrapper {
  height: 60vh; /* partea de jos a paginii */
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Responsivitate pentru portrait */
@media (orientation: portrait) {
  .map-wrapper {
    height: 35vh;
  }
}
</style>
