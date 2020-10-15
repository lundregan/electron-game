import { Tile } from './Tile'
import Store from '@/store/index'

export class SingleDirection extends Tile {
    constructor (
        active: boolean,
        x: number,
        y: number,
        direction: string
    ) {
        super(direction, active, x, y)
    }

    toggle () {
        super.toggle()
        
        //Store.dispatch('toggleTile', [this.x+1, this.y+1])

        this.toggleDirection()
    }

    private toggleDirection() {
        const cords = [this.x, this.y]
        
        switch(this.type){
            case 'toggle-right':
                cords[1] += 1
                break
            case 'toggle-left':
                cords[1] -= 1
                break
            case 'toggle-up':
                cords[0] -= 1
                break
            case 'toggle-down':
                cords[0] += 1
                break
            default:
                break
        }

        Store.dispatch('toggleTile', cords)
    }
}