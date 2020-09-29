import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Game from '../views/Game.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  routes
})

export default router
