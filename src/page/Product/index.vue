<template lang="pug">
  #product
    banner(:banner_data="banner_img")
    .container
      .section-header
        h1
          i.fa.fa-th-list(aria-hidden='true')
          | 商品列表
      ol.breadcrumb
        li
          router-link(:to="{ path: '/' }")
            i.fa.fa-home(aria-hidden='true')
        li.active 商品列表
      .row
        .col-sm-3
          h3 產品展示
          ul
            li(v-for="ProductMenu in ProductMenus")
              router-link(:to="{ path: ProductMenu.url }") {{ ProductMenu.title }}
        .col-sm-9
          .col-sm-4.col_product(v-for="product in products")
            shop-card(:product_data="product", :product_discount="discount")
</template>
<script>
import Banner from '@/components/layout/Banner'
import ShopCard from './Child/ShopCard'

export default {
  components: { ShopCard, Banner },
  data () {
    return {
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg',
      products: [],
      discount: 0.5,
      ProductMenus: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:3000/products').then(response => {
      console.log(response.data)
      this.products = response.data
    })
    this.axios.get('http://localhost:3000/ProductMenus').then(response => {
      console.log(response.data)
      this.ProductMenus = response.data
    })
  },
  computed: {
  }
}
</script>
<style scoped lang="sass">
@import './static/css/style.sass'

#product
  animation: fadeIn 1s ease both
  img
    animation: fadeInUp 1s ease both
  p
    font-size: 18px
  i
    margin-right: 5px
  .col-md-12
    p
      padding: 0 100px
    img
      margin-bottom: 50px
  .col-md-6
    p
      span
        font-size: 50px
        color: red
      .form
        margin-right: 30px
    img
      +size(400px,400px)
  ul
    li
      +size(90%,50px)
      h3
        color: $main-color
      
    a
      color: #666
      font-size: 16px
      line-height: 50px
      border-bottom: 1px solid rgba(96, 76, 63, 0.5)
      display: block
      width: 100%
      &:hover,&:active,&:focus
        background: #e0e0e0
        border-color: $main-color
        outline: 0
    .form-control
        margin: 0 10%


h1
  font-size: 30px
.col_product
  padding: 20px
</style>
