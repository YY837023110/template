// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 引入 axios (二次封装) */
import { Get, Post } from './http'
Vue.prototype.$get = Get
Vue.prototype.$post = Post

/* 引入轮播 */
import VueAwesomeSwiper from 'vue-awesome-swiper'

/* 引入 iView */
import iView from 'iview'

/* 引入cookie */
import cookie from 'vue-cookie'

Vue.use(iView)
Vue.use(VueAwesomeSwiper)
Vue.use(cookie)

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
