// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './vuex/store'
import VueResource from 'vue-resource'
import { Swipe, SwipeItem } from 'vue-swipe'
require('vue-swipe/dist/vue-swipe.css')
Vue.use(VueResource)
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
