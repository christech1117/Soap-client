<template lang="">
  <div class="product">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="product" class="content">
      <h2>{{ product.name }}</h2>
      <h3>{{ product.price }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      product: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      this.axios.get('http://localhost:3000/products/' + this.$route.params.id).then(response => {
        console.log(response.data)
        this.loading = false
        this.product = response.data
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'


</style>
