<template>
  <section class="game container">
    <div class="heading">
      <p class='title' v-if='playingGame'>Playing Game</p>
      <p class='title' v-else>Editing Game</p>
    </div>
    <b-button @click='changeMode()'>
      <span v-if='playingGame'>Edit Game</span>
      <span v-else>Play Game</span>
    </b-button>

    <b-field label="Simple" v-if='!playingGame' >
      <b-select placeholder="Select a name" v-model='selectedTileType'>
          <option v-for="tileType in tileTypes"
              :value="tileType"
              :key="tileType.id"
              placeholder='none-selected'
              >
              {{ tileType }}
          </option>
      </b-select>
    </b-field>

    <div class="columns">
        <div class="column"></div>
        <div class="column">
        <div class="gtiles" style='display: flex; flex-direction: column;'>
          <div class="rows" v-for='x in tileGrid.length' :key='x.id' style='display: flex;'>
            <div class='game-tile'
              v-for='y in tileGrid.length'
              :key='y.id'
              :class='{"tile-active" : tileGrid[x-1][y-1].active , "tile-inactive" : !tileGrid[x-1][y-1].active}'
              @click='tileClicked(x-1, y-1)'
            >
            <span v-if='!playingGame'>{{tileGrid[x-1][y-1].type}}</span>
            </div>
          </div>
        </div>
        </div>
        <div class="column"></div>
    </div>

  </section>
</template>

<script>

class Tile {
  constructor(type, active){
    this.type = type;
    this.active = active;
  }
  click() {
    this.active = !this.active;
    console.log(this.type)
  }
}

export default {
  name: 'Home',
  components: {
  },
  mounted () {
    const generatedTileGrid = [];

    for(let i = 0; i < this.tileGridSize; i++){
      const columnArray = [];

      for(let j = 0; j < this.tileGridSize; j++){
        columnArray.push(
          new Tile('default', false)
        );
      }

      generatedTileGrid.push(columnArray);
    }

    this.tileGrid = generatedTileGrid;
  },
  data () {
    return {
      playingGame: true,
      tileGridSize: 10,
      tileGrid: [].length,
      selectedTileType: 'none-selected',
      tileTypes: [
        'default',
        'toggle-up',
        'toggle-down',
        'toggle-right',
        'toggle-left'
      ]
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
        this.tileGrid[x][y].active = !this.tileGrid[x][y].active 
      }else{
        console.log(`Before: ${this.tileGrid[x][y].type}`)
        this.tileGrid[x][y].type = this.selectedTileType
        console.log(`After: ${this.tileGrid[x][y].type}`)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
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
