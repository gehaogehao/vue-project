import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/common/stylus/style.styl'
import '@/mock'
import axios from '@/api'

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
