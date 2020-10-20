import { SingleDirection } from './SingleDirection'
import Store from '@/store/index'
import { Tile } from './Tile'

export class SingleLineDirection extends Tile {
    direction: string
    
    constructor (
        active: boolean,
        x: number,
        y: number,
        direction: string
    ) {
        super('SingleLineDirection', active, x, y)

        this.direction = direction
        this.icon = `arrow-collapse-${this.direction}`
    }

    toggle () {
        super.toggle()
        
        //Store.dispatch('toggleTile', [this.x+1, this.y+1])

        this.toggleDirection()
    }

    private toggleDirection() {
        for(let i = 1; i < 10; i++){
            this.delayedDirectionToggle(i)
        }
    }

    private delayedDirectionToggle(i: number) {
        const cords = [this.x, this.y]

        switch(this.direction){
            case 'right':
                cords[1] += i
                break
            case 'left':
                cords[1] -= i
                break
            case 'up':
                cords[0] -= i
                break
            case 'down':
                cords[0] += i
                break
            default:
                break
        }

        setTimeout(() => {
            Store.dispatch('toggleTile', cords)
        }, 100 * i);
    }
}