import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import store from './store'
import router from './router'

Vue.config.productionTip = false


new Vue({
  el: "#app",
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
