import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'

import { TileBoard } from '../data/TileBoard'
import { TileTypes } from '../data/TileTypes'
import { Theme } from '../data/Theme'
import { Level } from '../data/Level'
import { Levels } from '../data/levels/levels'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    //tileBoard: new TileBoard(10),
    moves: 0,
    //levelName: null,
    //level: null,
    tileTypes: new TileTypes(),
    theme: new Theme(),
    levels: new Levels(),
    level: new Level(0, 'testLevel', new TileBoard(10))
  },


  getters: {
    
    tileBoard: state => {
      return state.level.getTileBoard()
    },

    moves: state => {
      return state.moves
    },

    levelName: state => {
      return state.level.getName()
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

    isLevelComplete: state => {
      let win = true;
      
      for(let i = 0; i < state.level.getTileBoard().board.length; i++){
        for (let j = 0; j < state.level.getTileBoard().board[i].length; j++) {
          const currentTile = state.level.getTileBoard().board[i][j]
          
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
    },

    levels: state => {
      return state.levels
    }

  },


  mutations: {
    
    SET_TILEBOARD (state, tileBoard: TileBoard){
      state.level.tileBoard = tileBoard
    },
    
    LOAD_LEVEL (state, id){
      state.level = state.levels.getLevel(id)
    },
    
    RESTART_LEVEL (state){
      state.level.reset()
    },
    
    TOGGLE_TILE (state, cords){
      state.level.tileBoard.toggleTile(cords[0], cords[1])
    },
    
    SET_TILE_TYPE (state, payload){
      state.level.tileBoard.setTileType(payload.x, payload.y, payload.type)
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
      state.level.setName(levelName)
    },
    
    SET_CURRENT_LEVEL (state, level){
      state.level = level
    }

  },


  actions: {
    
    generateNewTileBoard (context, size: number){
      context.commit('SET_TILEBOARD', new TileBoard(size))
    },
    
    loadLevel (context, id){
      context.commit('LOAD_LEVEL', id)
    },
    
    restartLevel (context){
      context.commit('RESTART_LEVEL')
      context.commit('RESET_MOVES')
    },
    
    toggleTile (context, cords){
      if(
        !this.state.level.tileBoard.outOfBounds(cords[0], cords[1])
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
