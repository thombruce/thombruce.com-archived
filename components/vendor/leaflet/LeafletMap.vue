<template lang="pug">
client-only
  l-map.map(
    ref="leafletMap"
    :center="center"
    :zoom="normalizedZoom"
    :options="options"
    :style='`height:${height};`'
  )
    l-tile-layer(
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    )
    l-marker(
      v-for="marker in markers"
      :key="marker.name"
      :lat-lng="[marker.latitude, marker.longitude]"
    )
      l-tooltip(:options="{sticky: true}")
        | {{ marker.name }}
</template>

<script>
export default {
  props: {
    latitude: { type: [String, Number], required: true },
    longitude: { type: [String, Number], required: true },
    zoom: { type: [String, Number], default: 4 },
    options: { type: Object, default: () => ({}) },
    height: { type: String, default: '24rem' },
    markers: { type: Object, default: () => ({}) }
  },
  computed: {
    normalizedLatitude () {
      return Number(this.latitude)
    },
    normalizedLongitude () {
      return Number(this.longitude)
    },
    normalizedZoom () {
      return Number(this.zoom)
    },
    center () {
      return [this.normalizedLatitude, this.normalizedLongitude]
    }
  }
}
</script>

<style lang='postcss'>
.map {
  min-height:5.5rem;
  width: 100%;
  z-index: 0;
}
</style>
