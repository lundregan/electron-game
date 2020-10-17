import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'

import { TileBoard } from '../data/TileBoard'
import { TileTypes } from '../data/TileTypes'
import { Theme } from '../data/Theme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    tileBoard: new TileBoard(10),
    moves: 0,
    levelName: null,
    level: null,
    tileTypes: new TileTypes(),
    theme: new Theme(),
  
  },


  getters: {
    
    tileBoard: state => {
      return state.tileBoard
    },

    moves: state => {
      return state.moves
    },

    levelName: state => {
      return state.levelName
    },

    level: state => {
      return state.level
    },

    tileTypes: state => {
      return state.tileTypes.getTypes()
    },

    theme: state => {
      return state.theme
    },

    activeColor: state => {
      return state.theme.getCurrentColor()
    },

    currentTileBoardCompleted: state => {
      let win = true;
      
      for(let i = 0; i < state.tileBoard.board.length; i++){
        for (let j = 0; j < state.tileBoard.board[i].length; j++) {
          const currentTile = state.tileBoard.board[i][j]
          
          if(
            currentTile.type != 'disabled' &&
            currentTile.type != 'invisible' &&
            currentTile.active === false
          ){
            win = false
          }
        }
      }

      return win
    }

  },


  mutations: {
    
    SET_TILEBOARD (state, tileBoard: TileBoard){
      state.tileBoard = tileBoard
    },
    
    LOAD_LEVEL (state, board){
      state.tileBoard.loadLevel(board)
    },
    
    RESTART_LEVEL (state){
      state.tileBoard.loadLevel(state.level)
    },
    
    TOGGLE_TILE (state, cords){
      state.tileBoard.toggleTile(cords[0], cords[1])
    },
    
    SET_TILE_TYPE (state, payload){
      state.tileBoard.setTileType(payload.x, payload.y, payload.type)
    },
    
    INCREMENT_MOVES (state, value){
      state.moves += value
    },
    
    RESET_MOVES (state){
      state.moves = 0
    },
    
    SET_THEME_COLOR (state, color){
      state.theme.setCurrentColor(color)
    },
    
    SET_CURRENT_LEVEL_NAME (state, levelName){
      state.levelName = levelName
    },
    
    SET_CURRENT_LEVEL (state, level){
      state.level = level
    }

  },


  actions: {
    
    generateNewTileBoard (context, size: number){
      context.commit('SET_TILEBOARD', new TileBoard(size))
    },
    
    loadLevel (context, level){
      context.commit('SET_CURRENT_LEVEL', level)
      context.commit('LOAD_LEVEL', level)     
      context.commit('RESET_MOVES')
    },
    
    restartLevel (context){
      context.commit('RESTART_LEVEL')
      context.commit('RESET_MOVES')
    },
    
    toggleTile (context, cords){
      if(
        !this.state.tileBoard.outOfBounds(cords[0], cords[1])
      ){
        context.commit('TOGGLE_TILE', cords)
      }
    },
    
    changeTileType (context, payload) {
      context.commit('SET_TILE_TYPE', payload)
    },
    
    tileClicked (context, value) {
      context.commit('INCREMENT_MOVES', value)
    },
    
    // gameMounted (context){
    //   context.commit('RESET_MOVES')
    // },
    
    changeCurrentLevelName (context, levelName){
      context.commit('SET_CURRENT_LEVEL_NAME', levelName)
    },
    
    changeThemeColor (context, color){
      context.commit('SET_THEME_COLOR', color)
    }
  },


  modules: {
    // No Modules Yet
  }

})
