import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Category from 'components/category/category'
import Cart from 'components/cart/cart'
import Product from 'components/product/product'
import Personal from 'components/personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        name: 'HomeProduct',
        path: ':id',
        component: Product
      }]
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
