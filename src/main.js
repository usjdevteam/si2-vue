import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vuelidate from 'vuelidate'

  
Vue.use(Vuetify, {
  iconfont: 'md'
})



Vue.use(Vuelidate)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import router from "./router"
import store from "./store"
import Axios from 'axios'

Vue.config.productionTip = false

// const opts = {}

// export default new Vuetify(opts)

Vue.prototype.$emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


console.log(process.env.VUE_APP_SERVER_API)

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify : new Vuetify()
}).$mount('#app')
