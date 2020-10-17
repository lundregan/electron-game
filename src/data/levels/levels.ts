import { Module } from 'vuex'
import { Level } from '../Level'
import * as level0 from '../levels/level0'
import * as level1 from '../levels/level1'
import { TileBoard } from '../TileBoard'

export class Levels {
    levels: Array<Level>

    constructor () {
        this.levels = [
            new Level(0, 'simple', this.jsonToTileBoard(level0.data)),
            new Level(1, 'Yoyo', this.jsonToTileBoard(level1.data))
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