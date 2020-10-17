<template>
  <div class="levels">
    <p :style='`color: ${activeColor};`'>Levels</p>

    <b-button 
        v-for='level in levels.levels' 
        :key='level.id'
        class='is-primary mx-1 px-5'
        @click='loadLevel(level.getID())'
        :style='`background: ${activeColor};`'
    >
        {{level.getName()}}
    </b-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'activeColor',
            'levels'
        ])
    },
    data () {
        return {
        }
    },
    methods: {
        loadLevel: function (id) {
            this.$store.dispatch('loadLevel', id)
            .then(() => {
                this.$router.push('Game')
            })
        }
    }
}
</script>

<style>

</style>