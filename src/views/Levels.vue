<template>
  <div class="levels">
    <p :style='`color: ${activeColor};`'>Levels</p>

    <b-button 
        v-for='level in gameLevels' 
        :key='level.id'
        class='is-primary mx-1 px-5'
        @click='loadLevel(level)'
        :style='`background: ${activeColor};`'
    >
        {{level.name}}
    </b-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import levels from '../data/levels/levels'

export default {
    computed: {
        ...mapGetters([
            'activeColor'
        ])
    },
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
            console.log(level.JSON)
            this.$store.dispatch('loadLevel', level.JSON.data).then(
                this.$router.push('Game')
            )
        }
    }
}
</script>

<style>

</style>