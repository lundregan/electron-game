export class Theme {
    colors: Array<string>
    currentColor: string

    constructor () {
        this.colors = [
            '#fb5607',
            '#ff006e',
            '#8338ec',
            '#3a86ff'
        ],
        this.currentColor = this.colors[0]
    }
    getCurrentColor () {
        return this.currentColor
    }
    setCurrentColor (color: string) {
        this.currentColor = color
    }
    getColors () {
        return this.colors
    }
}

// export class Themes {
//     pastel: Theme
//     bright: Theme
//     default: Theme

//     constructor(){
//         this.default = new Theme(
//             'default',
//             [
//                 '#3a86ff'
//             ]
//         ),
//         this.pastel = new Theme(
//             'pastel',
//             [
//                 '#ffadad',
//                 '#ffd6a5',
//                 '#fdffb6',
//                 '#caffbf',
//                 '#9bf6ff',
//                 '#a0c4ff',
//                 '#bdb2ff',
//                 '#ffc6ff',
//             ]
//         ),
//         this.bright = new Theme(
//             'bright',
//             [
//                 '#ffbe0b',
//                 '#fb5607',
//                 '#ff006e',
//                 '#8338ec',
//                 '#3a86ff'
//             ]
//         )
//     }
// }