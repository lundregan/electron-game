<template>
  <section class="game container row content">
    <p :style='`color: ${activeColor};`'>Playing Game</p>
    <div class="columns">
        <div class="column">
          <div>
            <p>{{levelName}}</p>
            <p v-if='currentTileBoardCompleted'>Complete</p>
            <p v-else>Incomplete</p>
          </div>
          <div>
            <p>Moves: {{moves}}</p>
          </div>
        </div>
        <div class="column">
          <TileGrid
            :playingGame=true
          ></TileGrid>
        </div>
        <div class="column">
          <b-button
            @click='restartLevel()'
          >
            <b-icon
              icon='restart'
            ></b-icon>
          </b-button>
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
      'currentTileBoardCompleted',
      'moves',
      'levelName',
      'activeColor'
    ])
  },
  data () {
    return {

    }
  },
  methods: {
    restartLevel: function () {
      console.log('restarting level')
      this.$store.dispatch('restartLevel')
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
