import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Product from '@/page/Product'
import Login from '@/page/Account/Login'
import Register from '@/page/Account/Register'
import ForgetPass from '@/page/Account/ForgetPass'
import About from '@/page/About'
import Contact from '@/page/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/productList', name: 'Product', component: Product },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgetPass', name: 'ForgetPass', component: ForgetPass },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
