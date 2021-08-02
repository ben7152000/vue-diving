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
      path: '/contactUs',
      name: 'Contact-us',
      component: () => import('../views/ContactUs')
    },
    {
      path: '/signIn',
      name: 'Sign-in',
      component: () => import('../views/SignIn')
    },
    {
      path: '/forgetPassword',
      name: 'Forget-password',
      component: () => import('../views/ForgetPassword')
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
  ],
  // 跳轉時回到最上面
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
