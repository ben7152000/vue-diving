import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// mock server
import './mock'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/zh-TW'
import locale from 'element-ui/lib/locale'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMobileAlt, faAddressCard, faSearch, faCommentDots, faCheckCircle, faShoppingCart, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faLine, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faMobileAlt, faAddressCard, faLine, faInstagramSquare, faFacebookSquare, faSearch, faCommentDots, faCheckCircle, faShoppingCart, faTrash, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI)

Vue.use(VueAxios, axios)

// lang
locale.use(lang)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
