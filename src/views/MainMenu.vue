<template>
<div class="main-menu">
    <div class="columns is-vcentered">
        <div class="column">
            <p class='title'>Tiles</p>
            <b-field>
                <router-link to='Game'>
                <b-button class='menu-button is-primary mx-4'>Continue</b-button>
                </router-link>
            </b-field>
            <b-field>
                <router-link to='Levels'>
                    <b-button class='menu-button is-primary mx-4'>Levels</b-button>
                </router-link>
            </b-field>
            <b-field>
                <router-link to='Editor'>
                    <b-button class='menu-button is-primary mx-4'>Editor</b-button>
                </router-link>
            </b-field>
        </div>
    </div>
    <div class="columns">
        <div class="column">Created by <a href='//github.com/lundregan' target='_blank'>Ethan Lundregan</a></div>
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
.main-menu {
    height: 100%;
}

.menu-button {
    min-width: 200px;
    min-height: 100px;

    font-size: 2rem
}
</style>