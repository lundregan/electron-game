<template>
  <div class="settings" v-on:keyup.esc='$router.go(-1)' v-on:keyup.space='$router.go(-1)'>
      <b-button class='is-primary' @click='$router.go(-1)'>Back to game</b-button>
      <hr>
      <p class='title'>Settings</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>