<template lang="pug">
  #cart
    .container
      table.table.table-striped
        thead
          tr
            th #
            th 商品圖片
            th 商品名稱
            th 數量
            th 小計
        tbody
          tr(v-for="(product,index) in products")
            td {{ index + 1 }}
            td {{ product.cover }}
            td {{ product.name }}
            td
              count
            td {{ product.price }}
      
      p {{ shop_amount }}
</template>

<script>
import count from './count'

export default {
  components: { count },
  data () {
    return {
      products: [],
      shop_amount: 0
    }
  },
  mounted () {
    this.products = this.$store.state.todos
    this.shop_amount = this.$store.state.todos.length
  },
  computed: {
  }
}
</script>
<style lang="sass">
th
  text-align: center

</style>
