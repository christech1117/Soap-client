import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
