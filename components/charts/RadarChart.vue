<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: [
    'labels',
    'datasets'
  ],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    })
  }
}
</script>
