<template>
<section class="editor container">
    <p :style='`color: ${activeColor};`'>Editing Game</p>
    
    
    
    <div class="columns">
        <div class="column">
            <b-button class='mb-6' @click='playing = !playing' style='min-width: 100%' :style='`background: ${activeColor};`'>
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
                :style="cssVars"
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
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    TileGrid
  },
  computed: {
    ...mapGetters([
      'tileTypes',
      'activeColor'
    ]),
    cssVars() {
      return {
        '--color': this.activeColor
      }
    }
  },
  data () {
    return {
        playing: false,
        selectedTileType: 'default',
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
      const levelData = this.$store.getters.currentTileBoard
      return JSON.stringify(levelData)
    }
  }
}
</script>


<style lang="scss" scoped>
.button-active {
    color: white;
    background: var(--color)
}
</style>
