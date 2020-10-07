<template>
<div class="tile-grid">
    <div class="gtiles" style='display: flex; flex-direction: column;'>
        <div class="rows" v-for='x in currentTileBoard.size' :key='x.id' style='display: flex;'>
            <b-button class='game-tile'
                v-for='y in currentTileBoard.size'
                :key='y.id'
                :class='{
                    "tile-active" : currentTileBoard.board[x-1][y-1].active ,
                    "tile-inactive" : !currentTileBoard.board[x-1][y-1].active,
                    "tile-disabled" : currentTileBoard.board[x-1][y-1].type === "disabled"
                }'
                @click='tileClicked(x-1, y-1)'
            >
                <span v-if='currentTileBoard.board[x-1][y-1]'>
                    <b-icon :icon='typeIcons[currentTileBoard.board[x-1][y-1].type]' size='is-large'></b-icon>
                </span>
                <p class='tile-type-text' v-if='!playingGame'>{{currentTileBoard.board[x-1][y-1].type}}</p>
            </b-button>
        </div>
    </div>
</div>
</template>

<script>
//import { TileBoard } from '../TileBoard.ts'
import { mapGetters } from 'vuex'

export default {
name: 'TileGrid',
props: [
    'playingGame',
    'selectedTileType'
],
computed: {
  ...mapGetters([
    'currentTileBoard'
  ])
},
data () {
    return {
      //tileBoard: new TileBoard(10),
      //selectedTileType: 'none-selected',
      typeIcons: {
        'default': 'none',
        'toggle-up': 'arrow-up-thick',
        'toggle-right': 'arrow-right-thick',
        'toggle-down': 'arrow-down-thick',
        'toggle-left': 'arrow-left-thick'
      }
    }
},
  methods: {
    changeMode: function () {
      this.playingGame = !this.playingGame
    },
    tileClicked: function (x, y) {
      if(this.playingGame){
        this.currentTileBoard.toggleTile(x, y)
      }else{
        console.log(`Before: ${this.currentTileBoard.board[x][y].type}`)
        this.currentTileBoard.board[x][y].type = this.selectedTileType
        console.log(`After: ${this.currentTileBoard.board[x][y].type}`)
      }
    }
  }
}
</script>

<style>
.tile-type-text {
  font-size: small;
}

.game-tile {
  width: calc(100vh / 12) !important;
  height: calc(100vh / 12) !important;

  margin: 1px;
}

.tile-active {
  background: cyan !important;
}

.tile-disabled {
    background: black;
}
</style>