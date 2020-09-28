<template>
  <div class="game">
    <h1>Playing Game</h1>

    <div class="tiles" style='display: flex; flex-direction: column;'>
      <div class="rows" v-for='x in tiles.width' :key='x.id' style='display: flex;'>
        <div 
          class="tile"
          v-for='y in tiles.height'
          :key='y.id' @click='test(x, y)'
          :class='{"tile-active" : tileGrid[x-1][y-1].active, "tile-inactive" : !tileGrid[x-1][y-1].active}'
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  padding: 50px;

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
  data () {
    return {
      tileGrid: [
        [new Tile('default', false), new Tile('default', false), new Tile('default', false)],
        [new Tile('default', false), new Tile('default', false), new Tile('default', false)],
        [new Tile('special', false), new Tile('default', false), new Tile('default', false)]
      ],
      tiles: {
        height: 3,
        width: 3
      }
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
