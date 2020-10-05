<template>
<div class="main-menu">
    

    <div class="columns is-vcentered menu">
        <div class="column">
            <p class="title">Tiles</p>
            <p class="sub-title">Gotta Complete em All!</p>
            <b-field>
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
            <b-field>
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
            <b-field>
                <router-link to='Editor'>
                    <b-button class='menu-button is-primary mx-4' icon-left="puzzle-edit"
                    size='is-large'>Editor</b-button>
                </router-link>
            </b-field>
        </div>
    </div>
    <div class="columns footer">
        <div class="column">Crafted by <a href='//github.com/lundregan' target='_blank'>Ethan Lundregan</a></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
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
</style>