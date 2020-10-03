import Vue from 'vue'
import Vuex from 'vuex'

import { TileBoard } from '../TileBoard'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTileBoard: new TileBoard(10)
  },
  getters: {
    currentTileBoard: state => {
      return state.currentTileBoard
    }
  },
  mutations: {
    SET_TILEBOARD(state, tileBoard: TileBoard){
      state.currentTileBoard = tileBoard
    }
  },
  actions: {
    generateNewTileBoard(context, size: number){
      context.commit('SET_TILEBOARD', new TileBoard(size))
    }
  },
  modules: {
  }
})
