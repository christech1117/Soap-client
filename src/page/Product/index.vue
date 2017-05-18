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
            li(v-for="side_menu in side_menus")
              router-link(:to="{ path: side_menu.url }") {{side_menu.title}}
        .col-sm-9
          .col-sm-4.col_product(v-for="product in products")
            shop-card(:product_data="product", :product_discount="discount")
</template>
<script>
import Banner from '@/components/layout/Banner'
import ShopCard from './ShopCard'

var products = [
  {
    'id': 1,
    'name': '生活調理乳',
    'price': 950,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg',
    'discount': 0.5
  },
  {
    'id': 2,
    'name': '生活保濕乳',
    'price': 900,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/138/20161115173455546_bp.jpg',
    'discount': 0.5
  },
  {
    'id': 3,
    'name': '潔',
    'price': 140,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/182/20170309113517722_bp.jpg',
    'discount': 0.5
  },
  {
    'id': 4,
    'name': '源',
    'price': 140,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/184/20170309114104730_bp.jpg',
    'discount': 0.5
  },
  {
    'id': 5,
    'name': '綠茶皂',
    'price': 180,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/187/20170309132421742_bp.jpg',
    'discount': 0.5
  },
  {
    'id': 6,
    'name': '茶樹皂',
    'price': 180,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 7,
    'name': '艾草香茅皂',
    'price': 180,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/175/20170309110151694_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 8,
    'name': '清新柑橘皂',
    'price': 180,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/176/20170309110826698_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 9,
    'name': '葡萄酒粕皂',
    'price': 200,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/177/20170309111803702_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 10,
    'name': '煥采果醋皂',
    'price': 220,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/178/20170309112127706_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 11,
    'name': '五葉松皂',
    'price': 220,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/179/20170309112712710_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 12,
    'name': '茉草皂',
    'price': 220,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/180/20170309112909714_sp.jpg',
    'discount': 0.5
  },
  {
    'id': 13,
    'name': '高山皂',
    'price': 270,
    'cover': 'https://www.teasoap.com.tw/downloads/product/10000/1000/181/20170309113233718_sp.jpg',
    'discount': 0.5
  }
]
export default {
  components: { ShopCard, Banner },
  data () {
    return {
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg',
      products: products,
      discount: 0.5,
      side_menus: [
        {
          id: 1,
          title: '特價商品',
          url: '/productList'
        },
        {
          id: 2,
          title: '熱銷商品',
          url: '/productList'
        },
        {
          id: 3,
          title: '各種膚質',
          url: '/productList'
        },
        {
          id: 4,
          title: '中油性膚質',
          url: '/productList'
        },
        {
          id: 5,
          title: '混合性膚質',
          url: '/productList'
        },
        {
          id: 6,
          title: '乾性膚質',
          url: '/productList'
        },
        {
          id: 7,
          title: '嬰兒膚質',
          url: '/productList'
        },
        {
          id: 8,
          title: '敏感性膚質',
          url: '/productList'
        }
      ]
    }
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
