export class Tile {
    type: string
    active: boolean
    x: number
    y: number
    icon: string | null
    
    constructor (
        type: string,
        active: boolean,
        x: number,
        y: number
    ) {
        this.type = type
        this.active = active
        this.x = x
        this.y = y

        this.icon = null
    }

    getType(){
        return this.type
    }

    setActive(active: boolean){
        this.active = active
    }

    toggleActive(){
        this.active = !this.active
    }

    click() {
        switch(this.type){
        default:
            this.active = !this.active
        }
    }

    toggle() {
        this.active = !this.active
    }

    getIcon() {
        return this.icon
    }
}