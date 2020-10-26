import { Bomb } from './Bomb'
import { Default } from './Default'
import { Disabled } from './Disabled'
import { Invisible } from './Invisible'
import { SingleDirection } from './SingleDirection'
import { SingleDirectionRotate } from './SingleDirectionRotate'
import { SingleLineDirection } from './SingleLineDirection'
import { SingleLineDirectionRotate } from './SingleLineDirectionRotate'

export class TileType {
    name: string
    directions: Array<string>

    constructor (name: string, directions: Array<string>) {
        this.name = name,
        this.directions = directions
    }
}

export class Tiles {
    types: Array<TileType>
    
    constructor () {
        this.types = [
            new TileType('Default', null),
            new TileType('Disabled', null),
            new TileType('Invisible', null),
            new TileType('Bomb', null),
            new TileType('SingleDirection', ['up', 'right', 'down', 'left']),
            new TileType('SingleDirectionRotate', ['up', 'right', 'down', 'left']),
            new TileType('SingleLineDirection', ['up', 'right', 'down', 'left']),
            new TileType('SingleLineDirectionRotate', ['up', 'right', 'down', 'left']),
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

            case 'Bomb':
                return new Bomb(active, x, y)

            case 'SingleDirection':
                return new SingleDirection(active, x, y, direction)
            
            case 'SingleLineDirection':
                return new SingleLineDirection(active, x, y, direction)

            case 'SingleDirectionRotate':
                return new SingleDirectionRotate(active, x, y, direction)

            case 'SingleLineDirectionRotate':
                return new SingleLineDirectionRotate(active, x, y, direction)

            default:
                return new Default(active, x, y)
        }
    }
}