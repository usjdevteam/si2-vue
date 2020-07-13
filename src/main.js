import Vue from 'vue'
import App from './App.vue'

import router from "./router"
import store from "./store"
import Axios from 'axios'


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuelidate from 'vuelidate'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faEdit)



Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(Vuelidate)



export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})





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



new Vue({
  render: h => h(App),
  router,
  store,
  vuetify : new Vuetify()
}).$mount('#app')
