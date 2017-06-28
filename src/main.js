// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import vSelect from 'vue-select'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('v-select', vSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
