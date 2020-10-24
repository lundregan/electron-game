import Store from '@/store/index'
import { Tile } from './Tile'
import { Animation } from '../TSInterfaces'

export class SingleDirectionRotate extends Tile {
    direction: string
    rotate: number
    rotateAnimation: Animation
    
    constructor (
        active: boolean,
        x: number,
        y: number,
        direction: string
    ) {
        super('SingleDirection', active, x, y)
        
        this.direction = direction
        this.icon = `arrow-${this.direction}-thick`

        this.rotateAnimation = {
            targets: `#tile-${this.x+1}-${this.y+1}`,
            rotate: 0,
            duration: 600,
            easing: 'easeInOutQuint'
        }
    }

    toggle () {
        super.toggle()

        this.toggleDirection()

        this.switchDirection()
    }

    private toggleDirection () {
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

    switchDirection () {
        this.rotateAnimation.rotate += 90;

        Store.dispatch('addAnimationToQueue', this.rotateAnimation)
        
        switch(this.direction){
            case 'up':
                this.direction = 'right'
                break
            case 'right':
                this.direction = 'down'
                break
            case 'down':
                this.direction = 'left'
                break
            case 'left':
                this.direction = 'up'
                break 
            default:
                console.log('Direction Invalid')
                return -1
        }
    }
}