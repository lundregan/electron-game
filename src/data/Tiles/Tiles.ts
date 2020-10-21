import { Default } from './Default'
import { Disabled } from './Disabled'
import { Invisible } from './Invisible'
import { SingleDirection } from './SingleDirection'
import { SingleLineDirection } from './SingleLineDirection'

export class Tiles {
    types: Array<string>
    
    constructor () {
        this.types = [
            'Default',
            'Disabled',
            'Invisible',
            'single-right',
            'single-left',
            'single-up',
            'single-down',
            'line-up',
            'line-left',
            'line-right',
            'line-down'
        ]
    }

    getTypes () {
        return this.types
    }

    newTile(
        type: string,
        x: number,
        y: number,
        active: boolean,
        direction: string | null
    ) {
        switch(type){
            case 'Default':
                return new Default(active, x, y)
            
            case 'Disabled':
                return new Disabled(x, y)
            
            case 'Invisible':
                return new Invisible(x, y)

            case 'SingleDirection':
                return new SingleDirection(active, x, y, direction)
            
            case 'SingleLineDirection':
                return new SingleLineDirection(active, x, y, direction)

            default:
                return new Default(active, x, y)
        }
    }
}