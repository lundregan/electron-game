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
            'invisible'
        ]
    }

    getTypes() {
        return this.types
    }
}