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
      path: '/knowledge',
      name: 'Knowledge',
      component: () => import('../views/Knowledge')
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
      path: '/member',
      name: 'Member',
      component: () => import('../views/Member')
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
