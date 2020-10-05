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
    },
    LOAD_LEVEL(state, board){
      state.currentTileBoard.loadLevel(board)
    },
    TOGGLE_TILE(state, cords){
      state.currentTileBoard.toggleTile(cords.x, cords.y)
    }
  },
  actions: {
    generateNewTileBoard(context, size: number){
      context.commit('SET_TILEBOARD', new TileBoard(size))
    },
    loadLevel(context, level){
      console.log('action loadlevel')
      console.log(level)
      //const levelData = JSON.parse(level)
      context.commit('LOAD_LEVEL', level)     
    },
    toggleTile (x, y) {
      const cords = {x: x, y: y}
      this.commit('TOGGLE_TILE', cords)
    }
  },
  modules: {
  }
})
