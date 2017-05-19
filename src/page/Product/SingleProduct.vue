<template lang="">
  <div class="product">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="product" class="content">
      <h2>{{ product.title }}</h2>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      this.axios.get('http://awiclass.monoame.com/api/command.php?type=get&name=post/' + this.$route.params.id).then(response => {
        this.product = response.data
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'


</style>
