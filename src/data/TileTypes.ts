export class TileTypes {
    types: Array<string>
    
    constructor () {
        this.types = [
            'default',
            'toggle-right',
            'toggle-left',
            'toggle-up',
            'toggle-down',
            'disabled',
            'invisible',
            'singleLineDirection-up',
            'singleLineDirection-left',
            'singleLineDirection-right',
            'singleLineDirection-down'
        ]
    }

    getTypes() {
        return this.types
    }
}