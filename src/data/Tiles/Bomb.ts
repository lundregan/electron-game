import Store from '@/store/index'
import { Tile } from './Tile'

export class Bomb extends Tile {
    constructor (
        active: boolean,
        x: number,
        y: number
    ) {
        super('Bomb', active, x, y)

        this.icon = 'bomb'
    }

    toggle () {
        Store.dispatch('changeTileType', {x: this.x, y: this.y, type: 'Disabled'})
    }
}