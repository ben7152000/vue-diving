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
      path: '/about-us',
      name: 'About-us',
      component: () => import('../views/AboutUs')
    },
    {
      path: '/courses-page',
      name: 'CoursesPage',
      component: () => import('../views/CoursesPage')
    },
    {
      path: '/courses-page/:id',
      name: 'CoursePage',
      component: () => import('../views/CoursePage'),
      props ({ params: { id } }) {
        return { id }
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products')
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: () => import('../views/Product')
    },
    {
      path: '/contact-us',
      name: 'Contact-us',
      component: () => import('../views/ContactUs')
    },
    {
      path: '/sign-in',
      name: 'Sign-in',
      component: () => import('../views/SignIn')
    },
    {
      path: '/forget-password',
      name: 'Forget-password',
      component: () => import('../views/ForgetPassword')
    },
    {
      path: '/member',
      name: 'Member',
      component: () => import('../views/Member')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout')
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
