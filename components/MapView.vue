<template lang="pug">
client-only(v-if='!$fetchState.pending')
  LeafletMap(:latitude='lat' :longitude='long' :zoom='z' :options='options' :height='height' :markers='markers')
</template>

<script>
export default {
  props: {
    place: { type: String },
    latitude: { type: [String, Number] },
    longitude: { type: [String, Number] },
    zoom: { type: [String, Number] },
    options: { type: Object },
    height: { type: String },
    markers: { type: Object }
  },
  data () {
    return {
      lat: this.latitude,
      long: this.longitude,
      z: this.zoom
    }
  },
  async fetch () {
    if (this.place) {
      const content = await this.$content('_data', 'places', this.place).fetch()
      this.lat = content.latitude
      this.long = content.longitude
      this.z = content.zoom
    }
  }
}
</script>
