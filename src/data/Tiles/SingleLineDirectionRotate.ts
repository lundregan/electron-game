import Store from '@/store/index'
import { Tile } from './Tile'
import { Animation } from '../TSInterfaces'

export class SingleLineDirectionRotate extends Tile {
    direction: string
    rotateAnimation: Animation
    
    constructor (
        active: boolean,
        x: number,
        y: number,
        direction: string
    ) {
        super('SingleLineDirectionRotate', active, x, y)

        this.direction = direction
        this.icon = `arrow-collapse-${this.direction}`

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

    private toggleDirection() {
        for(let i = 1; i < 10; i++){
            if(
                this.delayedDirectionToggle(i) == false
            ){
                console.log('breaking')
                break
            }
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

        const tileBoard = Store.getters.tileBoard
        if(!tileBoard.outOfBounds(cords[0], cords[1])){
            if(tileBoard.board[cords[0]][cords[1]].type == 'Disabled'){
                
                return false

            }else{
                console.log('toggling')
                setTimeout(() => {
                    Store.dispatch('toggleTile', cords)
                }, 100 * i);

                return true

            }
        }
        
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