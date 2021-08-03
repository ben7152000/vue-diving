import Vue from 'vue'
import Vuex from 'vuex'
import goodsOptions from './goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsAbout: goodsOptions
  }
})
