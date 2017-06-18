<template lang="pug">
  .home
    #myCarousel.carousel.slide(data-ride='carousel')
      // Indicators
      ol.carousel-indicators
        li.active(data-target='#myCarousel', data-slide-to='0')
        li(data-target='#myCarousel', data-slide-to='1')
        li(data-target='#myCarousel', data-slide-to='2')
        li(data-target='#myCarousel', data-slide-to='3')
      // Wrapper for slides
      .carousel-inner
        .item.active
          .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/be27663b9469cd4b6f7a0110907aa275.jpg')")
        .item
          .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg')")
        .item
          .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/ce99d9306219b43ff4a11a2c68cd6bc5.jpg')")
        .item
          .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/c854332138261a24a47fb3342d600a9b.jpg')")
      // Left and right controls
      a.left.carousel-control(href='#myCarousel', data-slide='prev')
        span.glyphicon.glyphicon-chevron-left
        span.sr-only Previous
      a.right.carousel-control(href='#myCarousel', data-slide='next')
        span.glyphicon.glyphicon-chevron-right
        span.sr-only Next
    .container
      .section-header
        h3 找商品
      .row
        .col-xs-12.col-sm-12.col-md-6
          .slider_container
            div
              router-link(:to="{ path: '/productList/singleItem' }")
                img(src='https://www.teasoap.com.tw/downloads/product/10000/1000/176/20170309110826698_sp.jpg', alt='pure css3 slider')
                span.info 檸檬、柳丁、橘子皆含豐富的維他命Ｃ，經常運用在各類清潔用品上，能有效潔淨肌膚，讓肌膚保有年輕般的光采。特別添加了清涼薄荷，為燥熱的夏天，帶來清新感受。
            div
              router-link(:to="{ path: '/productList/singleItem' }")
                img(src='https://www.teasoap.com.tw/downloads/product/10000/1000/179/20170309112712710_sp.jpg', alt='pure css3 slider')
                span.info 五葉松，自古被稱為「神仙的食物」，是松樹裡最好的一種，其含豐富葉綠素、不飽和脂肪酸、黃酮醇、胺基酸、礦物質等多種營養素，能溫和清潔肌膚。
            div
              router-link(:to="{ path: '/productList/singleItem' }")
                img(src='https://www.teasoap.com.tw/downloads/product/10000/1000/189/20170309134150750_sp.jpg', alt='pure css3 slider')
                span.info 富含左手香和乳油木果脂，具有維持肌膚水嫩、防止肌膚粗糙之功效，淡雅清香的白蘭花，洗後滋潤、不緊繃、不乾澀，讓您身心舒緩。
            div
              router-link(:to="{ path: '/productList/singleItem' }")
                img(src='https://www.teasoap.com.tw/downloads/product/10000/1000/178/20170309112127706_sp.jpg', alt='pure css3 slider')
                span.info 蘋果醋含有果膠、維他命、礦物質及酵素，能防止肌膚粗糙，其酸性成份能使肌膚光滑。而蘋果多酚，能增強肌膚活力，提供肌膚滋潤與防護效果，維持您肌膚的彈性與水潤。
            div
              router-link(:to="{ path: '/productList/singleItem' }")
                img(src='https://www.teasoap.com.tw/downloads/product/10000/1000/180/20170309112909714_sp.jpg', alt='pure css3 slider')
                span.info 茉草，民俗傳統習俗中常應用之草本植物，搭配潤澤的苦茶油，可淨化肌膚、去除污穢，洗後舒適清爽。
        .col-xs-6.col-sm-4.col-md-2
          .product-card
            router-link(:to="{ path: '/productList' }")
              .overlay
              img.thumbnail(src='https://www.teasoap.com.tw/downloads/product/10000/1000/184/20170309114104730_bp.jpg', alt='...')
              h3 各種膚質
        .col-xs-6.col-sm-4.col-md-2
          .product-card
            router-link(:to="{ path: '/productList' }")
              .overlay
              img.thumbnail(src='https://www.teasoap.com.tw/downloads/product/10000/1000/174/20170309104857690_bp.jpg', alt='...')
              h3 中油性肌膚
        .col-xs-6.col-sm-4.col-md-2
          .product-card
            router-link(:to="{ path: '/productList' }")
              .overlay
              img.thumbnail(src='https://www.teasoap.com.tw/downloads/product/10000/1000/182/20170309113517722_bp.jpg', alt='...')
              h3 混合性肌膚
        .col-xs-6.col-sm-4.col-md-2
          .product-card
            router-link(:to="{ path: '/productList' }")
              .overlay
              img.thumbnail(src='https://www.teasoap.com.tw/downloads/product/10000/1000/183/20170309113708726_bp.jpg', alt='...')
              h3 乾性肌膚
        .col-xs-6.col-sm-4.col-md-2
          .product-card
            router-link(:to="{ path: '/productList' }")
              .overlay
              img.thumbnail(src='https://www.teasoap.com.tw/downloads/product/10000/1000/187/20170309132421742_bp.jpg', alt='...')
              h3 嬰兒肌膚
        .col-xs-6.col-sm-4.col-md-2
          .product-card
            router-link(:to="{ path: '/productList' }")
              .overlay
              img.thumbnail(src='https://www.teasoap.com.tw/downloads/product/10000/1000/180/20170309112909714_bp.jpg', alt='...')
              h3 敏感性肌膚
      .section-header
        h3 限時活動
      .row
        .col-xs-12.col-sm-4.col-md-4
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/74/2016%E8%87%BA%E7%81%A3%E6%96%87%E5%8D%9A%E6%9C%83%20%E8%89%8B%E8%88%BA%E8%82%A5%E7%9A%825.jpg', alt='')
              h4 結婚不知如何開始準備嗎？
              p 一個悶熱準備下起雷陣雨的午后，計程車穿越過快速道路，原以為這趟採訪路途遙遠，沒想到約15分鐘下交流道來到了新店，這次要採訪的是「京采...
        .col-xs-12.col-sm-4.col-md-4
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/79/3.jpg', alt='Do')
              h4 用愛經營，讓蜜月更甜蜜！
              p 決定自助婚紗風格的三大關鍵，莫過於「攝影」、「禮服」、「造型」。自助婚紗的好處就在於，無論是攝影師、造型師或婚紗禮服，都不用受限於傳...
        .col-xs-12.col-sm-4.col-md-4
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/70/3.jpg', alt='Sit Am')
              h4 特搜 ♪ 全台嫁妝店和禮俗用品店！
              p 我很喜歡聽歌，對我來說每首歌都代表著回憶，所以婚禮當天播放的歌曲就非常重要嚕！(可惜我當時籌備婚禮時太忙了，除了二次進場音樂是自己準...
      .section-header.wow.fadeIn
        h3 消息快報
      .row
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/74/2016%E8%87%BA%E7%81%A3%E6%96%87%E5%8D%9A%E6%9C%83%20%E8%89%8B%E8%88%BA%E8%82%A5%E7%9A%825.jpg', alt='')
              h4 結婚不知如何開始準備嗎？
              p 一個悶熱準備下起雷陣雨的午后，計程車穿越過快速道路，原以為這趟採訪路途遙遠，沒想到約15分...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/79/3.jpg', alt='Do')
              h4 用愛經營，讓蜜月更甜蜜！
              p 決定自助婚紗風格的三大關鍵，莫過於「攝影」、「禮服」、「造型」。自助婚紗的好處就...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/70/3.jpg', alt='Sit Am')
              h4 特搜 ♪ 全台嫁妝店和禮俗用品店！
              p 我很喜歡聽歌，對我來說每首歌都代表著回憶，所以婚禮當天播放的歌曲就非常重要嚕！...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/70/3.jpg', alt='Sit Am')
              h4 特搜 ♪ 全台嫁妝店和禮俗用品店！
              p 我很喜歡聽歌，對我來說每首歌都代表著回憶，所以婚禮當天播放的歌曲就非常重要嚕！(可惜我當時...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/74/2016%E8%87%BA%E7%81%A3%E6%96%87%E5%8D%9A%E6%9C%83%20%E8%89%8B%E8%88%BA%E8%82%A5%E7%9A%825.jpg', alt='')
              h4 結婚不知如何開始準備嗎？
              p 一個悶熱準備下起雷陣雨的午后，計程車穿越過快速道路，原以為這趟採訪路途遙遠，沒想到約15分...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/79/3.jpg', alt='Do')
              h4 用愛經營，讓蜜月更甜蜜！
              p 決定自助婚紗風格的三大關鍵，莫過於「攝影」、「禮服」、「造型」。自助婚紗的好處就...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/70/3.jpg', alt='Sit Am')
              h4 特搜 ♪ 全台嫁妝店和禮俗用品店！
              p 我很喜歡聽歌，對我來說每首歌都代表著回憶，所以婚禮當天播放的歌曲就非常重要嚕！...
        .col-xs-12.col-sm-4.col-md-3
          .news-card
            router-link(:to="{ path: '/news/singleNew' }")
              img(src='http://www.monga.com.tw/NewsImgs/70/3.jpg', alt='Sit Am')
              h4 特搜 ♪ 全台嫁妝店和禮俗用品店！
              p 我很喜歡聽歌，對我來說每首歌都代表著回憶，所以婚禮當天播放的歌曲就非常重要嚕！(可惜我當時...
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Banner from '@/components/layout/Banner'

export default {
  components: { NavBar, Banner },
  data () {
    return {
      banner_img: 'http://demo.mor-e.com.tw/demo/yatia/images/main/6b149f1fdc0c0f8e2cc4594a60ec0b03.jpg'
    }
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

.news-card
  +size(100%,500px)
  animation: fadeIn 1s ease both
  margin-bottom: 40px
  background: $white-color
  border: 1px solid #ddd
  box-shadow: 2px 2px 5px rgba(185, 185, 185, .75)
  text-align: left
  
  a:hover
    color: $black-color
  img
    +size(100%,250px)
  h4
    padding: 25px 20px 0px 20px
    font-size: 20px
    +size(100%,55px)
  p
    padding: 5px 20px 20px 20px
    font-size: 15px
    color: #999999

.product-card
  animation: fadeIn 1s ease both
  position: relative
  margin-bottom: 20px
  background: $white-color
  img
    +size(100%)
  h3
    position: absolute
    top: 30%
    left: 0
    color: $white-color
    width: 100%
    z-index: 3

// .hot-product
//   background: $white-color

.hot-product-card
  img
    +size(100%)
  h3
    position: absolute
    bottom: 7%
    left: 5%
    color: $white-color
    z-index: 3


.product-card:hover img, .hot-product-card:hover img, .news-card:hover img
  opacity: .8
  -o-transition: all .5s
  -moz-transition: all .5s
  -webkit-transition: all .5s
  -ms-transition: all .5s
  transition: all .5s


.slider_container
  height: 350px
  position: relative
  border-color: $white-color
  img
    width: 100%
    height: 320px
  div
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    opacity: 0
    filter: alpha(opacity=0)
    -webkit-animation: round 25s linear infinite
    animation: round 25s linear infinite
  span
    position: absolute
    bottom: 0
    left: 0
    padding: 5px 20px 20px 20px
    font-size: 15px
    background: $white-color
    height: 100px
    text-align: left
    -webkit-transform: scaleY(1)
    -ms-transform: scaleY(1)
    transform: scaleY(1)
    -webkit-transition: all 0.3s ease-in-out
    transition: all 0.3s ease-in-out

@-webkit-keyframes round
  4%
    opacity: 1
    filter: alpha(opacity=100)
    /* 0 - 1秒 淡入*/
  20%
    opacity: 1
    filter: alpha(opacity=100)
    /* 1- 5秒靜止*/

  24%
    opacity: 0
    filter: alpha(opacity=0)
    /* 5-6秒淡出*/

@keyframes round
  4%
    opacity: 1
    filter: alpha(opacity=100)
    /* 0 - 1秒 淡入*/

  20%
    opacity: 1
    filter: alpha(opacity=100)
    /* 1- 5秒靜止*/

  24%
    opacity: 0
    filter: alpha(opacity=0)
    /* 5-6秒淡出*/


.slider_container div:nth-child(5)
  -webkit-animation-delay: 0s
  animation-delay: 0s

.slider_container div:nth-child(4)
  -webkit-animation-delay: 5s
  animation-delay: 5s


.slider_container div:nth-child(3)
  -webkit-animation-delay: 10s
  animation-delay: 10s


.slider_container div:nth-child(2)
  -webkit-animation-delay: 15s
  animation-delay: 15s


.slider_container div:nth-child(1)
  -webkit-animation-delay: 20s
  animation-delay: 20s


.slider_container:hover
  span
    width: 100%
    -webkit-transform: scaleY(1)
    -ms-transform: scaleY(1)
    transform: scaleY(1)
  div
    -webkit-animation-play-state: paused
    animation-play-state: paused

.banner-img
  background: no-repeat center
  height: 300px
  background-size: cover
</style>
