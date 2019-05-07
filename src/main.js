// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
// import { Toast } from 'vant'
// Vue.use(Toast)
// 引入公共样式
import './assets/sass/main.scss'
import './assets/css/reset.css'
require('es6-promise').polyfill()
Es6Promise.polyfill()
// 300延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

// Vue.prototype.$toast = Toast

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
