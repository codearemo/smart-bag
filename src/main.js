import Vue from 'vue'
import App from './App'
import Header from './components/Header'
import router from './router'
import VueResource from 'vue-resource'
import textFilter from './filters/txt'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.component('sb-header', Header)
Vue.filter('txt', textFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
