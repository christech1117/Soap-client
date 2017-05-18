<template lang="pug">
  #nav-footer
      .top-footer
        .container
          .row
            .col-sm-3.col-sm-offset-1
              h3 關於我們
              p      提供一個平台，將小農的農業經營與消費者的生活做結合。小農在平台上提供特色、安全的農產品，將經營農業活動的甘苦點滴分享給消費者。
            .col-sm-3.col-sm-offset-2
              h3 其他說明
              p
                router-link(:to="{ path: '/otherRule' }") 隱私權政策
              p
                router-link(:to="{ path: '/otherRule' }") 免責聲明
              p
                router-link(:to="{ path: '/otherRule' }") 使用條款
              p
                router-link(:to="{ path: '/rule' }") 購物須知
            .col-sm-3
              h3 聯絡我們
              p
                a(href='https://www.google.com.tw/maps/place/221%E6%96%B0%E5%8C%97%E5%B8%82%E6%B1%90%E6%AD%A2%E5%8D%80%E4%BF%9D%E4%B8%80%E8%A1%97/@25.0810065,121.6718441,17z/data=!4m15!1m9!4m8!1m0!1m6!1m2!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5L-d5LiA6KGX!2m2!1d121.6740381!2d25.0810065!3m4!1s0x345d5300a71adf4f:0xafeba7cfeba54dfb!8m2!3d25.0810065!4d121.6740381')
                  i.fa.fa-map-marker(aria-hidden='true')
                  | 地址：新北市汐止區汐止火車站
              p
                a(href='tel:0920-033849')
                  i.fa.fa-phone(aria-hidden='true')
                  | 電話：0920 - 033 - 849
              p
                a(href='mailto:christech1117@gmail.com')
                  i.fa.fa-envelope(aria-hidden='true')
                  | E-mail：christech1117@gmail.com
      .bottom-footer
        .container
          .row
            .col-sm-6.footer-copyright
              p
                | Copyright © 2017 
                em Chris - All Rights Reserved.
            .col-sm-6
              ul
                li
                  a(href='#')
                    i.fa.fa-facebook
                li
                  a(href='#')
                    i.fa.fa-twitter

</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

.top-footer
  text-align: left
  margin: 0 auto
  color: $white-color
  font-weight: 200
  background: #313030
  color: $content-color
  p
    color: $white-color
    
  a
    color: $white-color
    &:hover
      color: $main-color
    &:focus
      color: $click-color
    i
      padding-right: 15px
    p
      &:hover
        color: $main-color
      &:focus
        color: $click-color
  h3
    &:after
      content: ''
      border-bottom: $main-color 3px solid
      display: block
      height: 2px
      width: 60px
      margin-top: 8px
      margin-bottom: 15px

.bottom-footer
  background: #272626
  padding-top: 10px
  margin: 0 auto
  a
    margin: 0 0 0 10px
    font-size: 26px
  ul
    float: right
  li
    float: left
    padding-left: 10px

  .footer-copyright
    text-align: left
    color: $content-color
</style>
