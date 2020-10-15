<template>
  <section class="game container">
    <p :style='`background: ${activeColor};`'>Playing Game</p>
    <div class="columns">
        <div class="column">
          <div>
            <p>{{currentLevelName}}</p>
            <p v-if='currentTileBoardCompleted'>Complete</p>
            <p v-else>Incomplete</p>
          </div>
          <div>
            <p>Moves: {{currentMoves}}</p>
          </div>
        </div>
        <div class="column">
          <TileGrid
            :playingGame=true
          ></TileGrid>
        </div>
        <div class="column"></div>
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
      'currentTileBoardCompleted',
      'currentMoves',
      'currentLevelName'
    ])
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>


<style lang="scss" scoped>

</style>
