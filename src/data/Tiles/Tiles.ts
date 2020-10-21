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
}