import { Tile } from './Tile'

export class Disabled extends Tile {
    constructor (
        x: number,
        y: number
    ) {
        super('disabled', false, x, y)
    }

    toggle() {
        return
    }
}