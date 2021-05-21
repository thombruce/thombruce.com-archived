<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
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
