<template>
  <div class="help">
        <p class='title'>HELP</p>

        <div class="columns">
            <div class="column"></div>
            <div class="column px-6">
                <div class="box bs" v-for='tileType in tileTypes' :key='tileType.id' style='background: #313131;'>
                    <article class="media media-tile">
                        <div class="media-left">
                        <figure class="image is-64x64">
                            <div class="tile">
                                <span v-if='tileType.icon' style='height: 100%;'>
                                <b-icon :icon='tileType.icon' style='height: 100%;'></b-icon>
                                </span>
                            </div>
                        </figure>
                        </div>
                        <div class="media-content">
                        <div class="content">
                            <p class='subtitle' style='color: #7957d5;'>{{tileType.name}}</p>
                            <p>{{tileType.description}}</p>
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
export default {
data () {
    return{
        tileTypes: [
            {
                name: 'Default',
                icon: null,
                description: 'Toggles itself only'
            },
            {
                name: 'Single Direction',
                icon: 'arrow-right-thick',
                description: 'Toggles itself and a single tile in direction of arrow'
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