import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'

import { TileBoard } from '../TileBoard'
import { TileTypes } from '../data/TileTypes'
import { Theme, Themes } from '../data/Themes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTileBoard: new TileBoard(10),
    currentMoves: 0,
    tileTypes: new TileTypes(),
    themes: new Themes(),
    currentTheme: null,
    activeColor: '#ffffff'
  },
  getters: {
    currentTileBoard: state => {
      return state.currentTileBoard
    },
    currentTileBoardCompleted: state => {
      let win = true;
      
      for(let i = 0; i < state.currentTileBoard.board.length; i++){
        for (let j = 0; j < state.currentTileBoard.board[i].length; j++) {
          if(state.currentTileBoard.board[i][j].active === false){
            win = false
          }
        }
      }

      return win
    },
    currentMoves: state => {
      return state.currentMoves
    },
    tileTypes: state => {
      return state.tileTypes.getTypes()
    },
    themes: state => {
      return state.themes
    },
    currentTheme: state => {
      return state.currentTheme
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
    },
    INCREMENT_MOVES(state, value){
      state.currentMoves += value
    },
    RESET_MOVES(state){
      state.currentMoves = 0
    },
    SET_THEME(state, themeName){
      state.currentTheme = state.themes[themeName]
    },
    SET_ACTIVE_COLOR(state, color){
      state.activeColor = color
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
      //context.commit('INCREMENT_MOVES')
      context.commit('TOGGLE_TILE', cords)
    },
    changeTileType(context, payload) {
      context.commit('SET_TILE_TYPE', payload)
    },
    tileClicked(context, value) {
      context.commit('INCREMENT_MOVES', value)
    },
    gameMounted(context){
      context.commit('RESET_MOVES')
    },
    changeTheme(context, themeName){
      context.commit('SET_THEME', themeName)
    },
    setActiveColor(context, color){
      context.commit('SET_ACTIVE_COLOR', color)
    }
  },
  modules: {
  }
})
