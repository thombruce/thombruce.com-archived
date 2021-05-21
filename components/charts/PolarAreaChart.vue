<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
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
