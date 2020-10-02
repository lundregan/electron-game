<template>
<section class="editor container">
    <p class='title'>Editing Game</p>

    <b-button 
        v-for='tileType in tileTypes'
        :key='tileType.id'
        :class='{"button-active" : selectedTileType == tileType}'
        @click='selectedTileType = tileType'
    >
        {{tileType}}
    </b-button>
    
    <div class="columns">
        <div class="column"></div>
        <div class="column">
          <TileGrid
            :playingGame=false
            :selectedTileType='selectedTileType'
          ></TileGrid>
        </div>
        <div class="column"></div>
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
        selectedTileType: 'default',
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
    
  }
}
</script>


<style lang="scss" scoped>
.button-active {
    background: green;
}
</style>
