<template>
  <div id="app">
    <b-navbar color='#212121' style='background: #212121' class='b-navbar row header'>
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
    <router-view class='row content'/>
  </div>
</template>

<style lang="scss">
@import 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css';

body {
  height: 100vh;
}

#app {
  height: 100%;

  font-family: Consolas, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: white;
  background: #212121;

  display: flex;
  flex-flow: column;
  height: 100%;
}

#app .header {
  flex: 0 1 auto;
}

#app .content {
  flex: 1 1 auto;
}
</style>
