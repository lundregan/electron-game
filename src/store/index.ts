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
      state.currentTileBoard.toggleTile(cords[0], cords[1])
    },
    SET_TILE_TYPE(state, payload){
      state.currentTileBoard.setTileType(payload.x, payload.y, payload.type)
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
    toggleTile(context, cords){
      context.commit('TOGGLE_TILE', cords)
    },
    changeTileType(context, payload) {
      context.commit('SET_TILE_TYPE', payload)
    }
  },
  modules: {
  }
})
