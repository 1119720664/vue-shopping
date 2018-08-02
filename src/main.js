// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/scss/index.scss'
import 'swiper/dist/css/swiper.css'
fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('common/image/error.png'),
  loading: require('common/image/loading.gif'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
