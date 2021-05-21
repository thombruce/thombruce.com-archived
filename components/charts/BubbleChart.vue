<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
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
