import { Module } from 'vuex'
import { Level } from '../Level'
import { TileBoard } from '../TileBoard'

import * as level0 from '../levels/level0'
import * as level1 from '../levels/level1'
import * as level2 from '../levels/level2'

export class Levels {
    levels: Array<Level>

    constructor () {
        this.levels = [
            new Level(0, 'simple', this.jsonToTileBoard(level0.data)),
            new Level(1, 'Yoyo', this.jsonToTileBoard(level1.data)),
            new Level(2, 'Around and around', this.jsonToTileBoard(level2.data))
        ]
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
}