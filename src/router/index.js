import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products'),
      children: [
        {
          path: ':id',
          name: 'Product',
          component: () => import('../views/Product')
        }
      ]
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('../views/Favorites')
    },
    {
      path: '/question',
      name: 'Question',
      component: () => import('../views/Question')
    },
    {
      path: '/policies',
      name: 'Policies',
      component: () => import('../views/Policies')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout')
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('../views/Orders')
    },
    {
      path: '/admin/signIn',
      name: 'Admin-signIn',
      component: () => import('../views/Admin/AdminSignIn')
    },
    {
      path: '/admin/dashboard',
      name: 'Admin-dashboard',
      component: () => import('../views/Admin/AdminDashboard')
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
