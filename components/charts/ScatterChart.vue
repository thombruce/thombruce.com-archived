<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
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
