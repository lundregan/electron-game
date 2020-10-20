import { Tile } from './Tile'
import Store from '@/store/index'

export class SingleDirection extends Tile {
    direction: string
    
    constructor (
        active: boolean,
        x: number,
        y: number,
        direction: string
    ) {
        super('SingleDirection', active, x, y)
        
        this.direction = direction
        this.icon = `arrow-${this.direction}-thick`
    }

    toggle () {
        super.toggle()
        
        //Store.dispatch('toggleTile', [this.x+1, this.y+1])

        this.toggleDirection()
    }

    private toggleDirection() {
        const cords = [this.x, this.y]
        
        switch(this.direction){
            case 'right':
                cords[1] += 1
                break
            case 'left':
                cords[1] -= 1
                break
            case 'up':
                cords[0] -= 1
                break
            case 'down':
                cords[0] += 1
                break
            default:
                break
        }
        
        setTimeout(() => {
            Store.dispatch('toggleTile', cords)
        }, 100)
        
    }

    // getIcon() {
    //     return `arrow-${this.direction}-thick`
    // }
}