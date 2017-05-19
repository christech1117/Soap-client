<template lang="pug">
  #contact
    .banner-img(style="background-image: url('http://demo.mor-e.com.tw/demo/yatia/images/main/c854332138261a24a47fb3342d600a9b.jpg')")
    .section-header
      h1
        i.fa.fa-phone.fa(aria-hidden='true')
        | 聯絡我們
    ol.breadcrumb
      li
        router-link(:to="{ path: '/' }")
          i.fa.fa-home(aria-hidden='true')
      li.active 聯絡我們
    .container
      .row.info
        .col-xs-12.col-sm-4.col-md-4
          i.fa.fa-volume-control-phone.fa-2x(aria-hidden='true')
          p
            a(href='tel:0920-033849') 0920 - 033 - 849
        .col-xs-12.col-sm-4.col-md-4
          i.fa.fa-map-marker.fa-2x(aria-hidden='true')
          p
            a(href='https://www.google.com.tw/maps/place/221%E6%96%B0%E5%8C%97%E5%B8%82%E6%B1%90%E6%AD%A2%E5%8D%80%E4%BF%9D%E4%B8%80%E8%A1%97/@25.0810065,121.6718441,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5L-d5LiA6KGX!2m2!1d121.6740381!2d25.0810065!3m4!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!8m2!3d25.0810065!4d121.6740381') 新北市汐止區汐止火車站
        .col-xs-12.col-sm-4.col-md-4
          i.fa.fa-envelope.fa-2x(aria-hidden='true')
          p
            a(href='mailto:christech1117@gmail.com') christech1117gmail.com
      form(action='')
        .row
          .col-xs-12.col-sm-12.col-md-12.form-group
            label.sr-only(for='name') 姓名
            input.form-control(type='text', placeholder='您的姓名')
          .col-xs-12.col-sm-6.col-md-6.form-group
            label.sr-only(for='email') 電子郵件
            input.form-control(type='email', placeholder='電子郵件')
          .col-xs-12.col-sm-6.col-md-6.form-group
            label.sr-only(for='phone') 行動電話
            input.form-control(type='number', placeholder='行動電話')
          .col-xs-12.col-sm-12.col-md-12.form-group
            label.sr-only(for='email') 內容
            textarea.form-control(rows='5', placeholder='我想說的是...')
        router-link(:to="{ path: '/contact' }")
          button.btn.btn-primary.btn-lg(type='submit') 送出
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'


</style>
