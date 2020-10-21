import { Tile } from './Tile'

export class Invisible extends Tile {
    constructor (
        x: number,
        y: number
    ) {
        super('Invisible', false, x, y)
    }

    toggle () {
        return
    }
}