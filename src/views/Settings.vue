<template>
  <div class="settings" v-on:keyup.esc='$router.go(-1)' v-on:keyup.space='$router.go(-1)'>
      <b-button class='is-primary' @click='$router.go(-1)'>Back to game</b-button>
      
      <p class='title pt-6'>Settings</p>
      
      <div class="columns">
        <div class="column">
          <b-field label="Theme">
            <b-select v-model='chosenTheme'>
              <option
                v-for="theme in themes"
                :value="theme.name"
                :key="theme.id"
              >
                {{ theme.name }}
              </option>
            </b-select>
          </b-field>
          <b-field>
            <div
              style='width: 50px; height:50px; background: white;'
            >
              
            </div>
          </b-field>
          <b-field label="Color Blind Mode">
            <b-select :placeholder="colorBlindModes[0]" disabled>
              <option
                v-for="colorBlindMode in colorBlindModes"
                :value="colorBlindMode.id"
                :key="colorBlindMode.id"
              >
                {{ colorBlindMode }}
              </option>
            </b-select>
          </b-field>
        </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
data () {
  return {
    chosenTheme: 'pastel',
    colorBlindModes: [
      'Off'
    ]
  }
},
computed: {
  ...mapGetters([
    'themes'
  ])
},
watch: {
  chosenTheme: function(val){
    this.$store.dispatch('changeTheme', val)
  }
},
mounted () {
  console.log(this.themes2)
},
methods: {
  // methods
}
}
</script>

<style>

</style>