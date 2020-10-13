export class Theme {
    name: string
    colors: Array<string>

    constructor (name: string, colors: Array<string>) {
        this.name = name,
        this.colors = colors
    }
    getName() {
        return this.name
    }
    getColors() {
        return this.colors
    }
}

export class Themes {
    pastel: Theme
    bright: Theme
    
    constructor(){
        this.pastel = new Theme(
            'pastel',
            [
                '#ffadad',
                '#ffd6a5',
                '#fdffb6',
                '#caffbf',
                '#9bf6ff',
                '#a0c4ff',
                '#bdb2ff',
                '#ffc6ff',
            ]
        ),
        this.bright = new Theme(
            'bright',
            [
                '#ffbe0b',
                '#fb5607',
                '#ff006e',
                '#8338ec',
                '#3a86ff'
            ]
        )
    }
}