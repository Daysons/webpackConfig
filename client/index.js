import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
