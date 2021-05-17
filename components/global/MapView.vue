<template lang="pug">
client-only
  div(:style='`min-height:5.5rem;height:${height};`')
    l-map.map(
      :zoom="zoom"
      :center="center"
      :options="options"
      ref="leafletMap"
    )
      l-tile-layer(
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      )
      l-marker(
        v-for="marker in markers"
        :key="marker.name"
        :lat-lng="[marker.latitude, marker.longitude]"
        @click="updateView(marker)"
      )
        l-tooltip(:options="{sticky: true}")
          | {{ marker.name }}
</template>

<script>
export default {
  props: {
    latitude: {
      type: [String, Number],
      required: true
    },
    longitude: {
      type: [String, Number],
      required: true
    },
    zoom: {
      type: [String, Number],
      default: 4
    },
    options: {
      type: Object,
      default: () => ({})
    },
    height: {
      type: String,
      default: '24rem'
    },
    markers: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    center() {
      return [this.latitude, this.longitude]
    }
  },
  methods: {
    updateView(marker) {
      this.$refs.leafletMap.mapObject.setView([marker.latitude, marker.longitude], marker.zoom)
      this.$router.push('/places/' + marker.slug)
    }
  }
}
</script>

<style lang='postcss'>
.map {
  min-height: inherit;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
