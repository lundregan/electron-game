<template>
  <section class="game container">
    <p class="title">Playing Game</p>
    <div class="columns">
        <div class="column"></div>
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

export default {
  name: 'Home',
  components: {
    TileGrid
  },
  // mounted () {
    
  // },
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
