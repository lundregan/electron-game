<template>
<div class="main-menu">
    

    <div class="columns is-vcentered menu">
        <div class="column">
            <p class="title ani menu-title mb-0 is-size-1">Tiles</p>
            <p class="sub-title ani mb-6">Gotta Complete em All!</p>
            <b-field class='ani'>
                <router-link to='Game'>
                    <b-button
                        class='menu-button is-primary mx-4'
                        icon-left="play-circle"
                        size='is-large'
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
                >
                    Levels
                </b-button>
                </router-link>
            </b-field>
            <b-field class='ani'>
                <router-link to='Editor'>
                    <b-button class='menu-button is-primary mx-4' icon-left="puzzle-edit"
                    size='is-large'>Editor</b-button>
                </router-link>
            </b-field>
        </div>
    </div>
    <div class="columns footer" style='background: #212121'>
        <div class="column ani">Crafted by <a href='//github.com/lundregan' target='_blank'>Ethan Lundregan</a></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    mounted () {
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