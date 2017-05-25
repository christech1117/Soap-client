import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Product from '@/page/Product'
import SingleProduct from '@/page/Product/SingleProduct'
import Login from '@/page/Account/Login'
import Register from '@/page/Account/Register'
import ForgetPass from '@/page/Account/ForgetPass'
import About from '@/page/About'
import Contact from '@/page/Contact'

import Err404 from '../page/Error/404'
import Err401 from '../page/Error/401'

Vue.use(Router)

export default new Router({
  mode: 'history', // html5
  base: __dirname, // router起始位置
  routes: [
    // {
    //   path: '/',
    //   redirect: '/readme'
    // },
    { path: '/', component: Home },
    { path: '/productList', name: 'Product', component: Product },
    { path: '/productList/:id', name: 'SingleProduct', component: SingleProduct },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgetPass', name: 'ForgetPass', component: ForgetPass },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/401', component: Err401, name: '401' },
    { path: '/404', component: Err404, name: '404' },
    // {
    //   path: '/errorpage',
    //   name: '错误页面',
    //   icon: '404',
    //   children: [
    //     { path: '401', component: Err401, name: '401' },
    //     { path: '404', component: Err404, name: '404' }
    //   ]
    // },
    { path: '*', redirect: '/404', hidden: true }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
