import Vue from 'vue'
import App from './App'
import Header from './components/Header'
import router from './router'

Vue.config.productionTip = false

Vue.component('sb-header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
