import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'

import { TileBoard } from '../data/TileBoard'
import { Theme } from '../data/Theme'
import { Level } from '../data/Level'
import { Levels } from '../data/levels/levels'
import { Tiles } from '@/data/Tiles/Tiles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
    moves: 0,
    tiles: new Tiles(),
    theme: new Theme(),
    levels: new Levels(),
    //level: new Level(0, 'testLevel', new TileBoard(10))
    
  },


  getters: {
    
    tileBoard: state => {
      return state.levels.current.getTileBoard()
    },

    moves: state => {
      return state.moves
    },

    levelName: state => {
      return state.levels.current.getName()
    },

    level: state => {
      return state.levels.current
    },

    tileTypes: state => {
      return state.tiles.getTypes()
    },

    theme: state => {
      return state.theme
    },

    activeColor: state => {
      return state.theme.getCurrentColor()
    },

    isLevelComplete: state => {
      let win = true;
      
      for(let i = 0; i < state.levels.current.getTileBoard().board.length; i++){
        for (let j = 0; j < state.levels.current.getTileBoard().board[i].length; j++) {
          const currentTile = state.levels.current.getTileBoard().board[i][j]
          
          if(
            currentTile.type != 'Disabled' &&
            currentTile.type != 'Invisible' &&
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
      state.levels.current.tileBoard = tileBoard
    },
    
    LOAD_LEVEL (state, id){
      state.levels.current = state.levels.getLevel(id)
    },

    CHANGE_LEVEL (state, id) {
      state.levels.changeLevel(id)
    },
    
    RESTART_LEVEL (state){
      state.levels.current.reset()
    },
    
    TOGGLE_TILE (state, cords){
      state.levels.current.tileBoard.toggleTile(cords[0], cords[1])
    },
    
    SET_TILE_TYPE (state, payload){
      state.levels.current.tileBoard.setTileType(payload.x, payload.y, payload.type, payload.direction)
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
      state.levels.current.setName(levelName)
    },
    
    SET_CURRENT_LEVEL (state, level){
      state.levels.current = level
    }

  },


  actions: {
    
    generateNewTileBoard (context, size: number){
      context.commit('SET_TILEBOARD', new TileBoard(size))
    },
    
    loadLevel (context, id){
      context.commit('LOAD_LEVEL', id)
      context.commit('RESET_MOVES')
    },

    changeLevel (context, id) {
      context.commit('CHANGE_LEVEL', id)
    },
    
    restartLevel (context){
      context.commit('RESTART_LEVEL')
      context.commit('RESET_MOVES')
    },
    
    toggleTile (context, cords){
      if(
        !this.state.levels.current.tileBoard.outOfBounds(cords[0], cords[1])
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
    },

    resetMoves (context) {
      context.commit('RESET_MOVES')
    }
  },


  modules: {
    // No Modules Yet
  }

})
