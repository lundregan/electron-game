<template>
<section class="editor container">
    <p class='title'>Editing Game</p>
    
    
    
    <div class="columns">
        <div class="column">
            <b-button class='is-primary mb-6' @click='playing = !playing' style='min-width: 100%'>
                <p v-if='playing'>Edit Game</p>
                <p v-else>Play Game</p>
            </b-button>
            <b-button 
                v-for='tileType in tileTypes'
                :key='tileType.id'
                class='px-4 mb-4'
                :class='{"button-active" : selectedTileType == tileType}'
                style='min-width: 100%'
                @click='selectedTileType = tileType'
            >
                {{tileType}}
            </b-button>
        </div>
        <div class="column">
          <TileGrid
            :playingGame='playing'
            :selectedTileType='selectedTileType'
          ></TileGrid>
        </div>
        <div class="column">
          <b-button
            @click='copyLevelDataToClipboard()'
          >Copy Level Data to Clipboard</b-button>
        </div>
    </div>
  </section>
</template>

<script>
import TileGrid from '../components/TileGrid'

export default {
  name: 'Home',
  components: {
    TileGrid
  },
  // mounted () {
    
  // },
  data () {
    return {
        playing: false,
        selectedTileType: 'default',
        tileTypes: [
            'default',
            'toggle-up',
            'toggle-down',
            'toggle-right',
            'toggle-left',
            'disabled'
        ],
        levelData: 'hello everybody!'
    }
  },
  mounted () {
    this.$store.dispatch('generateNewTileBoard', 10)
  },
  methods: {
    copyLevelDataToClipboard: function () {
      this.$copyText(this.getLevelData()).then(e => {
        alert('Level Data Copied to Clipboard')
        console.log(e)
      })
    },
    getLevelData: function () {
      //return this.levelData
      //return JSON.stringify(TileGrid)
      const levelData = this.$store.getters.currentTileBoard
      return JSON.stringify(levelData)
    }
  }
}
</script>


<style lang="scss" scoped>
.button-active {
    background: green;
}
</style>
