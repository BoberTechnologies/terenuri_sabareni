<template>
  <div
      ref="mapContainer"
      class="map-container"
      :style="{ height: '100%', width: '100%' }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'

import customPinUrl from '../../res/icons/pin.svg'

const props = defineProps({
  pins: {
    type: Array,
    required: true,
    validator: pins =>
        Array.isArray(pins) &&
        pins.every(p => typeof p.lat === 'number' && typeof p.lng === 'number')
  },
  center: { type: Object, default: null },
  zoom: { type: Number, default: 12 },
  pulse: { type: Boolean, default: true },
})

const mapContainer = ref(null)
let map = null
let markerCluster = null

function openDirections(lat, lng, label = '') {
  const encoded = encodeURIComponent(label || `${lat},${lng}`)
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encoded}`
  window.open(url, '_blank', 'noopener')
}

function createIcon() {
  return L.divIcon({
    html: `<img src="${customPinUrl}" class="marker-img ${props.pulse ? 'pulse' : ''}" /><div class="marker-label"></div>`,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })
}

function addMarkers() {
  if (!map) return
  markerCluster.clearLayers()
  const bounds = L.latLngBounds()

  props.pins.forEach(pin => {
    const m = L.marker([pin.lat, pin.lng], { icon: createIcon(), title: pin.label || '' })

    if (pin.label) m.bindPopup(pin.label)

    m.on('add', () => {
      const el = m.getElement()
      if (el) {
        const labelEl = el.querySelector('.marker-label')
        if (labelEl) labelEl.textContent = pin.label || ''
      }
    })

    m.on('click', () => openDirections(pin.lat, pin.lng, pin.label))
    markerCluster.addLayer(m)
    bounds.extend([pin.lat, pin.lng])
  })

  markerCluster.addTo(map)

  if (props.pins.length > 0) {
    setTimeout(() => map.flyToBounds(bounds.pad(0.1), { animate: true, duration: 1.2 }), 0)
  }
}

function initMap() {
  const initialCenter = props.center
      ? [props.center.lat, props.center.lng]
      : props.pins[0]
          ? [props.pins[0].lat, props.pins[0].lng]
          : [0, 0]

  map = L.map(mapContainer.value, { center: initialCenter, zoom: props.zoom })
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; OpenStreetMap contributors',
    zoom: 14,
    maxZoom: 18,
  }).addTo(map)

  markerCluster = L.markerClusterGroup({ showCoverageOnHover: false, maxClusterRadius: 50 })
  addMarkers()
  nextTick(() => setTimeout(() => map.invalidateSize(), 0))
}

onMounted(() => initMap())
onBeforeUnmount(() => { if (map) map.remove(); map = null })
watch(() => props.pins, () => addMarkers(), { deep: true })
</script>

<style scoped>
.map-container {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.marker-img {
  width: 40px;
  height: 40px;
  transform-origin: center bottom;
}

.marker-label {
  text-align: center;
  font-size: 12px;
  color: black;
  margin-top: -10px;
}

.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.6; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
