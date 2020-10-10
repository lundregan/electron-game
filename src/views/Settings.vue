<template>
  <div class="settings" v-on:keyup.esc='$router.go(-1)' v-on:keyup.space='$router.go(-1)'>
      <b-button class='is-primary' @click='$router.go(-1)'>Back to game</b-button>
      
      <p class='title pt-6'>Settings</p>
      
      <div class="columns">
        <div class="column">
          <b-field label="Theme">
            <b-select :placeholder="themes[0]" disabled>
              <option
                v-for="theme in themes"
                :value="theme.id"
                :key="theme.id"
              >
                {{ theme }}
              </option>
            </b-select>
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
export default {
data () {
  return {
    themes: [
      'Default Light'
    ],
    colorBlindModes: [
      'Off'
    ]
  }
}
}
</script>

<style>

</style>