<template>
  <section class="game container row content">
    <p :style='`color: ${activeColor};`'>Playing Game</p>
    <div class="columns">
        <div class="column info-column">
          <div>
            <p>{{levelName}}</p>
            <p v-if='isLevelComplete'>
              Complete
            </p>
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
        <div class="column options-column">
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
  watch: {
    isLevelComplete: function (complete) {
      if(complete){
        this.levelComplete()
      }
    }
  },
  computed: {
    ...mapGetters([
      'isLevelComplete',
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
      this.$store.dispatch('restartLevel')
      this.$buefy.toast.open({
        duration: 1500,
        message: 'Level Restarted',
        position: 'is-top',
        type: 'is-info'
      })
    },
    levelComplete: function () {
      this.$buefy.toast.open({
        duration: 1500,
        message: 'Level Complete',
        position: 'is-top',
        type: 'is-success'
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.info-column, .options-column {
  min-width: 100px; 
}
</style>
