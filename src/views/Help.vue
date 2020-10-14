<template>
  <div class="help">
        <p :style='`color: ${activeColor};`'>HELP</p>

        <div class="columns">
            <div class="column"></div>
            <div class="column px-6">
                <div class="box bs" v-for='tileType in tileTypes' :key='tileType.id' style='background: #313131;'>
                    <article class="media media-tile">
                        <div class="media-left">
                        <figure class="image is-64x64">
                            <div class="tile" v-if='tileType.unlocked'>
                                <span v-if='tileType.icon' style='height: 100%;'>
                                <b-icon :icon='tileType.icon' style='height: 100%;'></b-icon>
                                </span>
                            </div>
                            <b-skeleton v-else width='50px' height='50px'></b-skeleton>
                        </figure>
                        </div>
                        <div class="media-content">
                        <div v-if='tileType.unlocked' class="content">
                            <p class='subtitle' :style='`color: ${activeColor};`'>{{tileType.name}}</p>
                            <p :style='`color: ${activeColor};`'>{{tileType.description}}</p>
                        </div>
                        <div v-else style='width: 100%;'>
                            <b-skeleton width='100px'></b-skeleton>
                            <b-skeleton height='80px'></b-skeleton>
                        </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="column"></div>
        </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
computed: {
    ...mapGetters([
        'activeColor'
    ])
},
data () {
    return{
        tileTypes: [
            {
                name: 'Default',
                icon: null,
                description: 'Toggles itself only',
                unlocked: true
            },
            {
                name: 'Single Direction',
                icon: 'arrow-right-thick',
                description: 'Toggles itself and a single tile in direction of arrow',
                unlocked: true
            },
            {
                name: 'Single Direction Test',
                icon: 'arrow-left-thick',
                description: 'testing things',
                unlocked: false
            }
        ]
    }
}
}
</script>

<style>
.media-tile {
    text-align: justify !important;
}

.tile {
    width: calc(100vh / 24) !important;
    height: calc(100vh / 24) !important;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1px;

    background: #414141;
    color: white;
}

.bs {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.bs:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>