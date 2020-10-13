import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueClipboard from 'vue-clipboard2'
import anime from 'animejs/lib/anime.es.js'

import 'buefy/dist/buefy.css'
import 'animate.css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueClipboard)
Vue.use(anime)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
