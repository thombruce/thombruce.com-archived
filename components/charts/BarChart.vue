<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: [
    'labels',
    'datasets'
  ],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets // [{ label: `Data`, backgroundColor: `#3B82F6`, data: [40, 20, 12] }]
    })
  }
}

// [{ label: `Data`, backgroundColor: `#3B82F6`, data: [40, 20, 12] }] is just a small sampling of what could be passed.
// I would like to have sensible default backgroundColors with the option to pass them in.
// I don't want to use a merge strategy, so I will probably separate that out into individual props.
</script>
