import { Module } from 'vuex'
import { Level } from '../Level'
import { TileBoard } from '../TileBoard'

import * as level0 from './levelData/level0'
import * as level1 from './levelData/level1'
import * as level2 from './levelData/level2'
import * as level3 from './levelData/level3'

export class Levels {
    levels: Array<Level>
    current: Level | null

    constructor () {
        this.levels = [
            new Level(0, 'simple', this.jsonToTileBoard(level0.data)),
            new Level(1, 'Yoyo', this.jsonToTileBoard(level1.data)),
            new Level(2, 'Around and around', this.jsonToTileBoard(level2.data)),
            new Level(3, 'Around and around w/ new tile', this.jsonToTileBoard(level3.data))
        ]

        this.current = new Level(-1, 'Default Level', new TileBoard(10))
    }

    getLevel (id: number) {
        return new Level(
            this.levels[id].getID(),
            this.levels[id].getName(),
            this.levels[id].getTileBoard()
            )
    }

    jsonToTileBoard (levelData: any) {
        const newTileBoard = new TileBoard(10)
        newTileBoard.loadLevel(levelData)

        return newTileBoard
    }

    changeLevel (id: number) {
        this.current = this.levels[id]
    }
}