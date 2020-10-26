<template>
  <section class="editor " :style="cssVars">
    <p :style="`color: ${activeColor};`">Editing Game</p>

    <div class="columns">
      <div class="column">
        <div class="tileTypeChangeButtons">
            <div class="set-active-state">
                <p class=''>Set Active State</p>
                <b-button
                    class="mb-6 mx-1"
                    @click="selectedTileType = 'Active'"
                    :class="{ selectedTileTypeButton: selectedTileType == 'Active' }"
                    >Set Active</b-button
                >
                    <b-button
                    class="mb-6 mx-1"
                    @click="selectedTileType = 'Inactive'"
                    :class="{ selectedTileTypeButton: selectedTileType == 'Inactive' }"
                    >Set Inactive</b-button
                >
            </div>
            <p style='width: 100%;'>Set Tile Types</p>
          <div
            v-for="tileType in tileTypes"
            :key="tileType.id"
            :class="{ 'button-active': selectedTileType == tileType, 'blazor': tileType.directions }"
            class="px-4 mt-4 typeChangeButton"
            @click="selectedTileType = tileType.name"
          >
            <div v-if="tileType.directions != null" class="tile-directions">
              <p>{{ tileType.name }}</p>
              <b-button
                v-for="direction in tileType.directions"
                :key="direction.id"
                :class="{
                  selectedTileTypeButton:
                    selectedTileType == tileType.name &&
                    selectedTileDirection == direction,
                }"
                @click="selectedTileDirection = direction"
              >
                <p>{{ direction }}</p>
              </b-button>
            </div>
            <div v-else>
              <b-button
                :class="{
                  selectedTileTypeButton: selectedTileType == tileType.name,
                }"
                @click="selectedTileType = tileType.name"
                >{{ tileType.name }}</b-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <TileGrid
          :playingGame="playing"
          :selectedTileType="selectedTileType"
          :selectedTileDirection="selectedTileDirection"
        ></TileGrid>
      </div>
      <div class="column">
        <div class="level-options">
            <div class="play-edit"></div>
            <b-button v-if="!playing" class="play-button" @click="playGame()">
                <b-icon icon='play'></b-icon>
            </b-button>
            <b-button v-else class="edit-button" @click="editGame()">
                <b-icon icon='stop'></b-icon>
            </b-button>
            <b-button @click="copyLevelDataToClipboard()"
            >Copy Level Data to Clipboard</b-button
            >
        </div>

        <div class="selectedTileEdit mt-6">
          <p v-if="selectedTileType">
            Selected Type::
            <span class="selectedTileTypeText">{{ selectedTileType }}</span>
          </p>
          <p v-if="selectedTileDirection">
            Direction::
            <span class="selectedTileTypeText">{{
              selectedTileDirection
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TileGrid from "../components/TileGrid";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    TileGrid,
  },
  computed: {
    ...mapGetters(["tileTypes", "activeColor", "tileBoard"]),
    cssVars() {
      return {
        "--active-color": this.activeColor,
      };
    },
  },
  data() {
    return {
      playing: false,
      selectedTileType: "default",
      selectedTileDirection: "right",
      levelData: "hello everybody!",
    };
  },
  created() {
    this.$store.dispatch("generateNewTileBoard", 10);
  },
  methods: {
    copyLevelDataToClipboard: function() {
      this.$copyText(this.getLevelData()).then(() => {
        //alert('Level Data Copied to Clipboard')
        this.$buefy.toast.open({
          duration: 2000,
          message: "Level Data Copied to Clipboard",
          position: "is-top",
          type: "is-info",
        });
      });
    },

    getLevelData: function() {
      const levelData = this.tileBoard;

      return JSON.stringify(levelData);
    },

    editGame: function() {
      this.playing = false;
    },

    playGame: function() {
      this.playing = true;
    },
  },
};
</script>

<style lang="sass" scoped>

$activeColor: var(--active-color)

.button-active
    color: white
    background: var(--active-color)

.play-button, .edit-button
    min-width: 100px
    margin: 12px 0px
    background: $activeColor
    color: white

.selectedTileTypeText
    color: $activeColor

.selectedTileTypeButton
    background: $activeColor
    color: white !important

.tile-directions
    display: flex

.tile-directions p
    margin-right: 15px

.tile-directions button
    margin: 0 6px

.typeChangeButton
    min-width: 100px

.level-options
    display: flex
    justify-content: space-evenly
    align-items: center

.tileTypeChangeButtons
    display: flex
    flex-wrap: wrap
    justify-content: space-between

.set-active-state
    width: 100%

.blazor
    width: 100%
    display: flex
    justify-content: flex-end
</style>
