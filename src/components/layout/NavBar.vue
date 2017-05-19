<template lang="pug">
  #nav-bar
    nav.navbar.navbar-default.navbar-fixed-top(role='navigation')
      .container
        .navbar-header
          button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#top-navbar')
            span.sr-only Toggle navigation
            span.icon-bar
            span.icon-bar
            span.icon-bar
          router-link.navbar-brand(:to="{ path: '/' }") Brand
        #top-navbar.collapse.navbar-collapse
          ul.nav.navbar-nav.navbar-right
            li(v-for="menu in menus")
              router-link(:to="{ path: menu.url }") {{menu.title}}
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          id: 1,
          title: '最新消息',
          url: '/new'
        },
        {
          id: 2,
          title: '商品介紹',
          url: '/productList'
        },
        {
          id: 3,
          title: '關於我們',
          url: '/about'
        },
        {
          id: 4,
          title: '聯絡我們',
          url: '/contact'
        },
        {
          id: 5,
          title: '會員登入',
          url: '/login'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
@import './static/css/style.sass'

.navbar-default
  background: $back-color
  border: 0
  box-shadow: 0px 0px 10px gray
  font-size: 16px

  .navbar-nav
    li
      a
        padding: 23px 15px
        border-bottom: 3px solid $back-color
        color: $black-color
        &:hover,&:active,&:focus
          background: #e0e0e0
          border-color: $main-color
          outline: 0
    .router-link-active
      background: #e0e0e0
      border-color: $main-color
      outline: 0
.navbar-brand
  +size(300px,100%)
  margin-top: 10px
  background: url("~/static/imgs/logo.png") no-repeat center
  background-size: cover
  text-indent: -99999px
</style>
