<template>
<div class="tile-grid">
    <div class="gtiles" style='display: flex; flex-direction: column;'>
        <div class="rows" v-for='x in tileBoard.size' :key='x.id' style='display: flex;'>
            <div class='game-tile'
                v-for='y in tileBoard.size'
                :key='y.id'
                :class='{"tile-active" : tileBoard.board[x-1][y-1].active , "tile-inactive" : !tileBoard.board[x-1][y-1].active}'
                @click='tileClicked(x-1, y-1)'
            >
                <!-- <b-icon icon=''></b-icon> -->
                <span v-if='tileBoard.board[x-1][y-1]'>
                    <b-icon :icon='typeIcons[tileBoard.board[x-1][y-1].type]'></b-icon>
                </span>
                <span v-if='!playingGame'>{{tileBoard.board[x-1][y-1].type}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { TileBoard } from '../TileBoard.ts'

export default {
name: 'TileGrid',
props: [
    'playingGame',
    'selectedTileType'
],
data () {
    return {
      tileBoard: new TileBoard(10),
      //selectedTileType: 'none-selected',
      tileTypes: [
        'default',
        'toggle-up',
        'toggle-down',
        'toggle-right',
        'toggle-left'
      ],
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
    test: function (n, t) {
      this.tileGrid[n - 1][t - 1].click()
      console.log(this.selectedTileType)
    },
    changeMode: function () {
      this.playingGame = !this.playingGame
    },
    tileClicked: function (x, y) {
      if(this.playingGame){
        this.tileBoard.toggleTile(x, y)
      }else{
        console.log(`Before: ${this.tileBoard.board[x][y].type}`)
        this.tileBoard.board[x][y].type = this.selectedTileType
        console.log(`After: ${this.tileBoard.board[x][y].type}`)
      }
    }
  }
}
</script>

<style>
.game-tile {
  width: 100px;
  height: 100px;

  margin: 1px;
}

.tile-active {
  background: cyan;
}

.tile-inactive {
  background: lightgrey;
}
</style>