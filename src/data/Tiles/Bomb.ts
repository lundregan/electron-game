import Store from '@/store/index'
import { Tile } from './Tile'
import { Animation } from '../TSInterfaces'


export class Bomb extends Tile {
    bombDestroyedAnimation: Animation
    
    constructor (
        active: boolean,
        x: number,
        y: number,
    ) {
        super('Bomb', active, x, y)

        this.icon = 'bomb'

        this.bombDestroyedAnimation = {
            targets: `#tile-${this.x+1}-${this.y+1}`,
            scale: 0.9,
            background: '#000000',
            duration: 600,
            easing: 'easeInOutQuint'
        }
    }

    toggle () {
        Store.dispatch('addAnimationToQueue', this.bombDestroyedAnimation)

        Store.dispatch('changeTileType', {x: this.x, y: this.y, type: 'Disabled'})
    }
}