export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const staticman = $axios.create()

  // Set baseURL to something different
  staticman.setBaseURL('https://thombruce-staticman.herokuapp.com/v3/entry/github/thombruce/thombruce.com/main')

  // Inject to context as $api
  inject('staticman', staticman)
}
