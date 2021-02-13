import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import cookie from 'cookie-js'
Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  cookie,
  render: h => h(App)
}).$mount('#app')
