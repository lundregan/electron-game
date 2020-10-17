<template>
  <div class="settings" v-on:keyup.esc='$router.go(-1)' v-on:keyup.space='$router.go(-1)'>
      <b-button class='is-primary' @click='$router.go(-1)' :style='`background: ${activeColor};`'>Back to game</b-button>
      
      <p class='pt-6 is-none' :style='`color: ${activeColor};`'>Settings</p>
      
      <div class="columns">
        <div class="column">
          <p :style='`color: ${activeColor};`'>Theme Color</p>
          <div style='display: flex; justify-content: center; flex-wrap: wrap;'>
            <div
              class='mx-4'
              v-for='color in theme.getColors()'
              :key='color.id'
              style='width: 50px; height:50px;'
              :style='` background: ${color}`'
              @click='changeColor(color)'
            >
            </div>
          </div>
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
    colorBlindModes: [
      'Off',
      'On'
    ]
  }
},
computed: {
  ...mapGetters([
    'theme',
    'activeColor'
  ])
},
mounted () {
  console.log(this.themes)
},
methods: {
  changeColor: function(color) {
    this.$store.dispatch('changeThemeColor', color)
  }
}
}
</script>

<style>

</style>