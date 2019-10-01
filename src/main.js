import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
