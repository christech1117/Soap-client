<template lang="pug">
  .productList_container
    router-link(:to="{ path: '/productList/singleItem' }")
      .cover(:style="bg_css")
        h3 {{product_data.name}}
      .info.text-left
        h5 {{product_discount * 10}}折
        h4 NT$
          s {{product_data.price}}
          span.final_price NT${{final_price}}
          p {{pro}}
    button.btn(@click="add_cart") 加入購物車
    button.btn.like(@click="get_product") 加入收藏
</template>

<script>
export default {
  props: ['product_data', 'product_discount'],
  data () {
    return {

    }
  },
  watch: {

  },
  methods: {
    add_cart (e) {
      e.preventDefault()
      var data = JSON.parse(localStorage.getItem('productData')) || []
      var products = {
        name: this.product_data.name,
        price: this.product_data.price,
        cover: this.product_data.cover
      }
      data.push(products)
      localStorage.setItem('productData', JSON.stringify(data))
    },
    get_product (data) {
      var getData = localStorage.getItem('productData')
      return alert(getData)
    },
    add_like () {
      return alert('已加到收藏清單')
    }
  },
  computed: {
    final_price () {
      return this.product_data.price * this.product_discount
    },
    bg_css () {
      return {
        'background-image': "url('" + this.product_data.cover + "')"
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

.productList_container
  animation: fadeInUp 1s ease both
  box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.1)
  border: solid 1px #eee
  border-radius: 2px
  &:hover
    box-shadow: 0px 10px 15px -5px rgba(0,0,0,0.2)
    .cover
      background-size: 110% auto
  .cover
    height: 150px
    background-color: #eee
    position: relative
    background-size: 100% auto
    background-position: center center
    background-repeat: no-repeat
    transition: 0.5s

    h3 
      position: absolute
      bottom: 10px
      font-size: 20px
      padding: 5px 15px
      background-color: #fff

  .info
    padding: 20px 20px
    h5
      font-size: 12px
    .final_price
      float: right
      color: $red-color
      &:before
        content: "特價"
    h4
  .btn
    border-left: 1px solid #eee
    font-size: 13px
</style>
