export class TileTypes {
    types: Array<string>
    
    constructor () {
        this.types = [
            'default',
            'disabled',
            'invisible',
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

    getTypes() {
        return this.types
    }
}