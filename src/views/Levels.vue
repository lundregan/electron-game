<template>
  <div class="levels">
    <p class='title' style='color: white;'>Levels</p>

    <b-button 
        v-for='level in gameLevels' 
        :key='level.id'
        class='is-primary mx-1 px-5'
        @click='loadLevel(level)'
    >
        {{level.name}}
    </b-button>
  </div>
</template>

<script>
import levels from '../levels/levels'

export default {
    mounted () {
        console.log(levels.name)
    },
    data () {
        return {
            gameLevels: levels.levels
        }
    },
    methods: {
        loadLevel: function (level) {
            console.log('loading level')
            this.$store.dispatch('loadLevel', level.JSON).then(
                this.$router.push('Game')
            )
        }
    }
}
</script>

<style>

</style>