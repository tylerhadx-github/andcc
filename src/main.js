import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'
import store from './store'
Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  { path: '/', component: HelloWorld },
  { path: '/Home', component: HelloWorld },
  { path: '/Blog', component: Blog }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  el: "#app",
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
