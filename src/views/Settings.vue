<template>
  <div class="settings" v-on:keyup.esc='$router.go(-1)' v-on:keyup.space='$router.go(-1)'>
      <b-button class='is-primary' @click='$router.go(-1)' :style='`background: ${activeColor};`'>Back to game</b-button>
      
      <p class='pt-6 is-none' :style='`color: ${activeColor};`'>Settings</p>
      
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
          <b-field style='display: flex; justify-content: center;'>
            <div
              class='mx-2'
              v-for='color in currentTheme.colors'
              :key='color.id'
              style='width: 50px; height:50px;'
              :style='` background: ${color}`'
              @click='changeColor(color)'
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
    'currentTheme',
    'themes',
    'activeColor'
  ])
},
watch: {
  chosenTheme: function(val){
    this.$store.dispatch('changeTheme', val)
  }
},
mounted () {
  console.log(this.themes)
},
methods: {
  changeColor: function(color) {
    this.$store.dispatch('setActiveColor', color)
  }
}
}
</script>

<style>

</style>