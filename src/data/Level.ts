import { TileBoard } from './TileBoard';

export class Level {
    id: number
    name: string
    initialTileBoard: TileBoard
    tileBoard: TileBoard
    moves: number

    constructor (
        id: number,
        name: string,
        tileBoard: TileBoard
    ) {
        this.id = id
        this.name = name
        this.initialTileBoard = tileBoard
        this.tileBoard = tileBoard
        this.moves = 0
    }

    reset () {
        this.tileBoard = this.initialTileBoard
    }

    getID() {
        return this.id
    }

    incrementMoves () {
        this.moves += 1
    }

    getTileBoard () {
        return this.tileBoard
    }

    getName () {
        return this.name
    }

    setName (newName: string) {
        this.name = newName
    }
}