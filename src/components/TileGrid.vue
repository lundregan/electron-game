<template>
<div class="tile-grid">
    <div class="gtiles" style='display: flex; flex-direction: column;' :key='rerenderInt'>
        <div class="rows" v-for='x in currentTileBoard.size' :key='x.id' style='display: flex;'>
            <div class='game-tile'
                v-for='y in currentTileBoard.size'
                :key='y.id'
                :id='"tile-" + x + "-" + y'
                :class='{
                    "tile-active" : currentTileBoard.board[x-1][y-1].active ,
                    "tile-inactive" : !currentTileBoard.board[x-1][y-1].active,
                    "tile-disabled" : currentTileBoard.board[x-1][y-1].type === "disabled",
                    "tile-invisible" : currentTileBoard.board[x-1][y-1].type === "invisible"
                }'
                @click='tileClicked(x-1, y-1)'
            >
                <span v-if='currentTileBoard.board[x-1][y-1]'>
                    <b-icon :icon='typeIcons[currentTileBoard.board[x-1][y-1].type]' size='is-large'></b-icon>
                    <p class='tile-type-text' v-if='!playingGame'>{{currentTileBoard.board[x-1][y-1].type}}</p>
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
      'currentTileBoard',
      'activeColor'
    ])
  },
  mounted () {
    this.$store.dispatch('gameMounted')

    anime({
      targets: 'div .game-tile',
      left: '240px',
      duration: '1000',
      direction: 'reverse',
      backgroundColor: '#313131',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad'
    })

    // On unmount needs to be destroyed?
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsubscribe = this.$store.subscribe((mutation, state) => {
      if( mutation.type == 'TOGGLE_TILE' ){
        this.tileToggleAnimation(mutation.payload)
        this.rerenderInt =+ 1
      }
      
      if( mutation.type == 'RESTART_LEVEL' ){
        this.rerenderInt += 1
      }
    })
  },
  data () {
    return {
      rerenderInt: 0,
      typeIcons: {
        'default': 'none',
        'toggle-up': 'arrow-up-thick',
        'toggle-right': 'arrow-right-thick',
        'toggle-down': 'arrow-down-thick',
        'toggle-left': 'arrow-left-thick'
      } 
    }
  },
  methods: {
    changeMode: function () {
      this.playingGame = !this.playingGame
    },
    tileClicked: function (x, y) { 
      if(this.playingGame){
        if(this.currentTileBoard.board[x][y].type != ('disabled' && 'invisible')){
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

      this.rerenderInt += 1
    },
    tileToggleAnimation: function (payload) {
      const x = payload[0]
      const y = payload[1]

      const color = this.currentTileBoard.board[x][y].active ? this.activeColor : '#414141'

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