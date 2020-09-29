<template>
  <div 
    class='game-tile'
    :class='{"tile-active" : isActive , "tile-inactive" : !isActive}'
    @click='test()'>

  </div>
</template>

<script>
export default {
    props: [
        'tileX',
        'tileY',
        'isActive'
    ],
    data () {
        return {
        }
    },
    methods: {
        test: function() {
            this.isActive = !this.isActive
            console.log(`${this.tileX} , ${this.tileY}`)
        }
    }
}
</script>

<style>
.game-tile {
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