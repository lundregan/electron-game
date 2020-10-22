import { SingleDirection } from './SingleDirection'
import Store from '@/store/index'
import { Tile } from './Tile'
import store from '@/store/index'

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
        
        this.toggleDirection()
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

}