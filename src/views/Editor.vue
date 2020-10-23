<template>
<section class="editor container">
    <p :style='`color: ${activeColor};`'>Editing Game</p>
    
    
    
    <div class="columns">
        <div class="column">
            <b-button class='mb-6' @click='playing = !playing' style='min-width: 100%' :style='`background: ${activeColor};`'>
                <p v-if='playing'>Edit Game</p>
                <p v-else>Play Game</p>
            </b-button>
            <div 
                v-for='tileType in tileTypes'
                :key='tileType.id'
                class='px-4 mb-4'
                :class='{"button-active" : selectedTileType == tileType}'
                style='min-width: 100%'
                @click='selectedTileType = tileType.name'
                :style="cssVars"
            >
              
              <div v-if='tileType.directions != null'>
                <p>{{tileType.name}}</p>
                <b-button 
                  v-for='direction in tileType.directions'
                  :key='direction.id'
                  @click='selectedTileDirection = direction'
                >
                  <p>{{direction}}</p>
                </b-button>
              </div>
              <div v-else>
                <b-button @click='selectedTileType = tileType.name'>{{tileType.name}}</b-button>
              </div>
            </div>
        </div>
        <div class="column">
          <TileGrid
            :playingGame='playing'
            :selectedTileType='selectedTileType'
            :selectedTileDirection='selectedTileDirection'
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
      'activeColor',
      'tileBoard'
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
        selectedTileDirection: 'right',
        levelData: 'hello everybody!'
    }
  },
  created () {
    this.$store.dispatch('generateNewTileBoard', 10)
  },
  methods: {
    copyLevelDataToClipboard: function () {
      this.$copyText(this.getLevelData()).then(e => {
        //alert('Level Data Copied to Clipboard')
        this.$buefy.toast.open({
          duration: 2000,
          message: 'Level Data Copied to Clipboard',
          position: 'is-top',
          type: 'is-info'
        })
      })
    },

    getLevelData: function () {
      const levelData = this.tileBoard

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
