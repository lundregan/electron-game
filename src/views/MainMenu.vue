<template>
<div class="main-menu">
    

    <div class="columns is-vcentered menu">
        <div class="column">
            <p class="ani menu-title mb-0 is-size-1" :style='`color: ${activeColor};`'>QUAD-TILES</p>
            <p class="sub-title ani mb-6" >{{currentMenuQuote}}</p>
            <b-field class='ani'>
                <router-link to='Game'>
                    <b-button
                        class='menu-button is-primary mx-4'
                        icon-left="play-circle"
                        size='is-large'
                        :style='`background: ${activeColor};`'
                    >
                        Continue
                    </b-button>
                </router-link>
            </b-field>
            
            <b-field class='ani'>
                <router-link to='Levels'>
                    <b-button
                    class='menu-button is-primary mx-4'
                    icon-left="package-variant"
                    size='is-large'
                    :style='`background: ${activeColor};`'
                >
                    Levels
                </b-button>
                </router-link>
            </b-field>
            <b-field class='ani'>
                <router-link to='Editor'>
                    <b-button class='menu-button is-primary mx-4' icon-left="puzzle-edit"
                    size='is-large' :style='`background: ${activeColor};`'>Editor</b-button>
                </router-link>
            </b-field>
        </div>
    </div>
    <div class="columns footer" style='background: #212121'>
        <div class="column ani" >Crafted by <a 
                                                href='//github.com/lundregan'
                                                target='_blank'
                                                :style='`color: ${activeColor};`'
                                            >Ethan Lundregan</a></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            currentMenuQuote: '',
            menuQuotes: [
                'Toggle some more',
                'Gotta toggle them all',
                'Just keep toggling, Just keep toggling',
                'Just one more tile before bed...'
            ]
        }
    },
    computed: {
        ...mapGetters([
            'activeColor'
        ])
    },
    mounted () {
        this.currentMenuQuote = this.menuQuotes[Math.floor(Math.random() * this.menuQuotes.length)]

        anime({
            targets: 'div .ani',
            direction: 'reverse',
            delay: 250,
            duration: 1000,
            translateX: function() {
                return anime.random(-1000, 1000);
            },
            translateY: function() {
                return anime.random(-1000, 1000);
            },
            scale: 2,
            rotate: '1turn',
            easing: 'easeInCubic'
        })
    }
}
</script>

<style lang='scss'>
$primary: #7957d5;

.menu {
    min-height: 80%;
}

.main-menu {
    height: 100%;
}

.menu-button {
    min-width: 200px;
    min-height: 100px;

    font-size: 2rem
}
.title {
    color: $primary !important;
    // font-size: 4rem !important;
    // margin-bottom: 0 !important;
}
</style>