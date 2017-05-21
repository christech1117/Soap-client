<template>
  <div id="app">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
    
    <back-top :defaultProps="300" :date="500"></back-Top>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue'
import FooterBar from './components/layout/FooterBar.vue'
import SideBar from './components/layout/SideBar.vue'
import backTop from 'vue-backtop'

export default {
  name: 'app',
  components: { NavBar, FooterBar, SideBar, backTop }
}
</script>

<style lang="sass">
@import './static/css/style.sass'

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
