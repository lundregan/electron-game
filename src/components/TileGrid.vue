<template>
<div class="tile-grid">
    <div class="gtiles" style='display: flex; flex-direction: column;' :key='rerenderInt' >
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
                @mouseenter="mouseOverTile(x-1, y-1)"
                @mousedown="mouseDown = true"
                @mouseup="mouseDown = false"
            >
                <span v-if='tileBoard.board[x-1][y-1]'>
                    <b-icon
                      v-if='
                        tileBoard.board[x-1][y-1].type == "SingleDirectionRotate" ||
                        tileBoard.board[x-1][y-1].type == "SingleLineDirectionRotate"'
                      icon='rotate-left'
                    ></b-icon>
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
      'selectedTileType',
      'selectedTileDirection'
  ],
  computed: {
    ...mapGetters([
      'tileBoard',
      'activeColor',
      'animationQueue'
    ])
  },
  watch: {
    animationQueue: function (animationQueue) {
      this.playAnimation(animationQueue[0])
    }
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
    })

    // On unmount needs to be destroyed?
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if( mutation.type == 'TOGGLE_TILE' ){
        this.tileToggleAnimation(mutation.payload)
      }
      
      if( mutation.type == 'RESTART_LEVEL' ){
        this.rerenderInt += 1
      }
      
    })

    this.$store.dispatch('resetMoves')

    //this.rerenderInt += 1

    for(let i = 0; i < this.tileBoard.board.length; i++){
      for(let j = 0; j < this.tileBoard.board.length; j++){
        console.log(this.tileBoard.board[i][j].active)
        
        // Not sure why this doesnt work without a delay?!
        if(this.tileBoard.board[i][j].active){
          setTimeout(() => {
            this.playTileToggleAnimation(i, j)  
          }, 1000);
          
        }
      }
    }

    //this.rerenderInt += 1
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  data () {
    return {
      rerenderInt: 0,
      mouseDown: false
    }
  },
  methods: {
    changeMode: function () {
      this.playingGame = !this.playingGame
    },

    playTileToggleAnimation: function (x, y) {
      console.log('playing animation')
      console.log(x, y)
      const color = this.tileBoard.board[x][y].active ? this.activeColor : '#414141'
      console.log(color)
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

    tileClicked: function (x, y) { 
      if(this.playingGame){
        if(this.tileBoard.board[x][y].type != ('Disabled' && 'Invisible' && 'Default' && 'Bomb')){
          this.$store.dispatch('tileClicked', 1)
          this.$store.dispatch('toggleTile', [x, y])
        }
      }else{
        if (this.selectedTileType == 'Active'){
          this.$store.dispatch('changeTileActive', {x: x, y: y, active: true})

          this.playTileToggleAnimation(x, y)
        }
        else if (this.selectedTileType == 'Inactive') {

          this.$store.dispatch('changeTileActive', {x: x, y: y, active: false})

          this.playTileToggleAnimation(x, y)
        }else{

          const payload = {
            x: x,
            y: y,
            type: this.selectedTileType,
            direction: this.selectedTileDirection
          }
          this.$store.dispatch('changeTileType', payload)
          .then(
            this.rerenderInt += 1
          )
        }
      }   
    },

    tileToggleAnimation: function (payload) {
      const x = payload[0]
      const y = payload[1]

      this.playTileToggleAnimation(x, y)
    },

    getTileIcon: function (x, y) {
      const icon = this.tileBoard.board[x][y].getIcon()
      
      return icon != null ? icon : ''
    },

    playAnimation: function (ani) {
      console.log('playingAnimation')
      
      anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      })
      
      .add(
        ani
      )

      this.$store.dispatch('animationPlayed')
    },

    mouseOverTile: function (x, y) {
      if(this.mouseDown && this.playingGame == false){
        const payload = {
            x: x,
            y: y,
            type: this.selectedTileType,
            direction: this.selectedTileDirection
        }
        if(this.tileBoard.board[x][y].type != this.selectedTileType){
          this.$store.dispatch('changeTileType', payload)
          .then(
            this.rerenderInt += 1
          )
        }
      }
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