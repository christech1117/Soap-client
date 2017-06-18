<template lang="pug">
  #singleProduct
    .loading(v-if="loading")
      p Loading...
 
    .error(v-if="error")
      p {{ error }}

    banner(:banner_data="banner_img")
    .container
      .section-header
        h1
          i.fa.fa-th-list(aria-hidden='true')
          | 詳細內容
      ol.breadcrumb
        li
          router-link(:to="{ path: '/' }")
            i.fa.fa-home(aria-hidden='true')
        li.active 詳細內容
      .row
        .col-sm-3
          h3 產品展示
          ul
            li(v-for="ProductMenu in ProductMenus")
              router-link(:to="{ path: ProductMenu.url }") {{ ProductMenu.title }}
        .col-sm-9
          .content(v-if="product")
            .row
              .col-sm-6
                .cover(:style="bg_css")
              .col-sm-6
                h2 {{ product.name }}
                h4(align="left") 原價：
                  s NT${{product.price}}
                  div  特價：
                    span NT${{product.price * 0.5}}
                button.btn.btn-success.btn-lg.btn-block(@click="add_cart_new") 加入購物車
                button.btn.btn-danger.btn-lg.btn-block(@click="get_product") 加入收藏  
            hr
            p 內容物：
            p 1. 手工精油皂100±5g三顆（香味隨機不重複）
            p 2. 手作乾燥花束乙只
            p 3. 45毫升植萃身體乳液乙瓶，
            p 以質感松木盒及緞帶包裝，附提袋。
            p 木盒約略尺寸：長24x寬10x高5cm
            p 提袋約略尺寸：長26.5x高23x側邊7.5cm
            p 保存期限：手工皂1年，乳液3年。
            img(src="https://www.tfb8000.com/tool/openfiledbkey.aspx?File=71|6D|8D|B0|B3|AC|84|9A|A8|B3|AC|A3|97|B0|AA|BB|BC|B9|AC|A3|8A|77|78|77|78|77|78|77|78|7A|7E|75|B0|B4|AE|79|6D|97|B6|BE|AC|B9|93|AC|BD|AC|B3|84|9F|&FileSave=%e6%8e%80%e8%93%8b1m.jpg")
            p 庇護員工用心製作的天然冷製法手工皂，搭配愛盲嚴選乳液，呵護您的肌膚。愛盲每一顆香皂皆由身心障礙員工歷時56天完成，不含防腐劑、化學添加物與界面活性劑，保存油脂中最寶貴的天然甘油成份，遇水分解不殘留，潔淨滋潤的同時也呵護了我們的地球。您消費帶來的盈餘將直接回饋到庇護員工的福利與薪資，請讓您的鼓勵成為他們生活的動力。
            img(src="https://www.tfb8000.com/tool/openfiledbkey.aspx?File=71|6D|8D|B0|B3|AC|84|9A|A8|B3|AC|A3|97|B0|AA|BB|BC|B9|AC|A3|8A|77|78|77|78|77|78|77|78|7A|7E|75|B0|B4|AE|7A|6D|97|B6|BE|AC|B9|93|AC|BD|AC|B3|84|9F|&FileSave=%e5%85%a7%e5%ae%b9%e7%89%a91m.jpg")


      
</template>

<script>
import Banner from '@/components/layout/Banner'

export default {
  components: { Banner },
  data () {
    return {
      loading: false,
      product: null,
      error: null,
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg',
      ProductMenus: []
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
    },
    add_cart_new () {
      const shopProduct = this.product
      this.$store.dispatch('add_cart', shopProduct)
    },
    get_product () {
    }
  },
  computed: {
    bg_css () {
      return {
        'background-image': "url('" + this.product.image + "')"
      }
    }
  },
  mounted () {
    this.axios.get('http://localhost:3000/ProductMenus').then(response => {
      console.log(response.data)
      this.ProductMenus = response.data
    })
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

#singleProduct
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
.cover
  height: 300px
  background-color: #eee
  position: relative
  background-size: 100% auto
  background-position: center center
  background-repeat: no-repeat
  transition: 0.5s

p
  margin: 30px 0
  text-align: left
  font-size: 20px
img
  margin: 30px 0

h2 
  font-size: 4rem
h4
  font-size: 2rem
  margin: 30px 50px
  div
    span
      color: red
</style>
