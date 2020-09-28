<template>
  <section class="game container">
    <h1>Playing Game</h1>

    <div class="columns">
        <div class="column"></div>
        <div class="column">
        <div class="gtiles" style='display: flex; flex-direction: column;'>
          <div class="rows" v-for='x in tileGrid.length' :key='x.id' style='display: flex;'>
            <div 
              class="gtile"
              v-for='y in tileGrid.length'
              :key='y.id' @click='test(x, y)'
              :class='{"tile-active" : tileGrid[x-1][y-1].active, "tile-inactive" : !tileGrid[x-1][y-1].active}'
            ></div>
          </div>
        </div>
        </div>
        <div class="column"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gtile {
  padding: 60px;

  margin: 1px;
}

.tile-active {
  background: cyan;
}

.tile-inactive {
  background: lightgrey;
}
</style>

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

    console.log(generatedTileGrid)
    this.tileGrid = generatedTileGrid;
  },
  data () {
    return {
      tileGridSize: 10,
      tileGrid: []
    }
  },
  methods: {
    test: function (n, t) {
      //console.log(`Tile Cord = ${n}, ${t}`)
      this.tileGrid[n - 1][t - 1].click();
    }
  }
}
</script>
