<template lang="pug">
  #cart
    banner(:banner_data="banner_img")
    .container
      .section-header
        h1
          i.fa.fa-th-list(aria-hidden='true')
          | 購物車
      table.table.table-striped
        thead
          tr
            th #
            th 商品圖片
            th 商品名稱
            th 數量
            th 小計
        tbody
          tr(v-for="(product, index) in products")
            td {{ index + 1 }}
            td.cover(:style="{ 'background-image': `url(${product.image})`}")
            td {{ product.name }}
            td
              count
            td {{ product.price / 2 }}
        // tfoot
        //   tr
        //     td
        //     td
        //     td
        //     td 合計
        //     td {{ product.price }}
      p {{ shop_amount }}
</template>

<script>
import Banner from '@/components/layout/Banner'
import count from './count'

export default {
  components: { Banner, count },
  data () {
    return {
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg',
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
<style scoped lang="sass">
th
  text-align: center

.cover
  width: 120px
  height: 100px
  background-color: #eee
  position: relative
  background-size: 100% auto
  background-position: center center
  background-repeat: no-repeat
  transition: 0.5s
</style>
