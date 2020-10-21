import { Tile } from './Tile'

export class Default extends Tile {
    constructor (
        active: boolean,
        x: number,
        y: number
    ) {
        super('Default', active, x, y)
    }
}