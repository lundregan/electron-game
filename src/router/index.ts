import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Game from '../views/Game.vue'
import Settings from '../views/Settings.vue'
import MainMenu from '../views/MainMenu.vue'
import Editor from '../views/Editor.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  }
]

const router = new VueRouter({
  routes
})

export default router
