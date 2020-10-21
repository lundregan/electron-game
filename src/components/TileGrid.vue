<template>
<div class="tile-grid">
    <div class="gtiles" style='display: flex; flex-direction: column;' :key='rerenderInt'>
        <div class="rows" v-for='x in tileBoard.size' :key='x.id' style='display: flex;'>
            <div class='game-tile'
                v-for='y in tileBoard.size'
                :key='y.id'
                :id='"tile-" + x + "-" + y'
                :class='{
                    "tile-disabled" : tileBoard.board[x-1][y-1].type === "Disabled",
                    "tile-invisible" : tileBoard.board[x-1][y-1].type === "Invisible"
                }'
                @click='tileClicked(x-1, y-1)'
            >
                <span v-if='tileBoard.board[x-1][y-1]'>
                    <b-icon :icon='getTileIcon(x-1, y-1)' size='is-large'></b-icon>
                    <p class='tile-type-text' v-if='!playingGame'>{{tileBoard.board[x-1][y-1].type}}</p>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'TileGrid',
  props: [
      'playingGame',
      'selectedTileType'
  ],
  computed: {
    ...mapGetters([
      'tileBoard',
      'activeColor'
    ])
  },
  mounted () {
    anime({
      targets: 'div .game-tile',
      left: '240px',
      duration: '1000',
      direction: 'reverse',
      backgroundColor: '#313131',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      unsubscribe: null
    })

    // On unmount needs to be destroyed?
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if( mutation.type == 'TOGGLE_TILE' ){
        this.tileToggleAnimation(mutation.payload)
        this.rerenderInt =+ 1
      }
      
      if( mutation.type == 'RESTART_LEVEL' ){
        this.rerenderInt += 1
      }
    })

    this.rerenderInt += 1
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  data () {
    return {
      rerenderInt: 1,
      typeIcons: {
        'default': 'none',
        'toggle-up': 'arrow-up-thick',
        'toggle-right': 'arrow-right-thick',
        'toggle-down': 'arrow-down-thick',
        'toggle-left': 'arrow-left-thick',
        'right': 'arrow-collapse-right',
        'left': 'arrow-collapse-left',
        'down': 'arrow-collapse-down',
        'up': 'arrow-collapse-up'
      } 
    }
  },
  methods: {
    changeMode: function () {
      this.playingGame = !this.playingGame
    },
    tileClicked: function (x, y) { 
      if(this.playingGame){
        if(this.tileBoard.board[x][y].type != ('disabled' && 'invisible')){
          this.$store.dispatch('tileClicked', 1)
          this.$store.dispatch('toggleTile', [x, y])
        }
      }else{
        const payload = {
          x: x,
          y: y,
          type: this.selectedTileType
        }
        this.$store.dispatch('changeTileType', payload)
      }
      
      //rerender for editor      
      if(!this.playingGame){
        this.rerenderInt += 1
      }
    },
    tileToggleAnimation: function (payload) {
      const x = payload[0]
      const y = payload[1]

      const color = this.tileBoard.board[x][y].active ? this.activeColor : '#414141'

      anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      })
      .add({
        targets: `#tile-${x+1}-${y+1}`,
        scale: 1.2,
        background: color,
        duration: 300,
        easing: 'easeInOutQuint'
      })
      .add({
        targets: `#tile-${x+1}-${y+1}`,
        scale: 1,
        duration: 300,
        direction: 'reverse',
        easing: 'easeOutQuint'
      })
    },
    getTileIcon: function (x, y) {
      const icon = this.tileBoard.board[x][y].getIcon()
      
      return icon != null ? icon : ''
    }
  }
}
</script>

<style>
.tile-type-text {
  font-size: small;
}

.game-tile {
  width: calc(100vh / 12) !important;
  height: calc(100vh / 12) !important;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1px;

  background: #414141; 
}

.tile-disabled {
    background: black !important;
}
.tile-invisible {
    background: #212121 !important;
} 
</style>