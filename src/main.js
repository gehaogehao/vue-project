import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/common/stylus/style.styl'
import '@/mock'
import '@/common/stylus/transition.styl'
import axios from '@/api'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.bus = new Vue()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
