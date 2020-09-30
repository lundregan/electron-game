<template>
  <div id="app">
    <b-navbar>
        <template slot="end">
          <router-link to="/">
              <b-icon
                  icon="menu"
                  size="is-large"
                  style='margin: 8px;'
              />
            </router-link>
            <router-link to="settings">
              <b-icon
                  icon="cog"
                  size="is-large"
                  style='margin: 8px;'
              />
            </router-link>
        </template>
    </b-navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css';

body {
  height: 100vh;
}

#app {
  height: 100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
