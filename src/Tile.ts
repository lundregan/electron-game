export class Tile {
    type: string
    active: boolean
    x: number
    y: number

    constructor(
        type: string,
        active: boolean,
        x: number,
        y: number
    ){
        this.type = type;
        this.active = active;
        this.x = x,
        this.y = y
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
        console.log(this.type)
        console.log(`${this.x} , ${this.y}`)
    
        switch(this.type){
        default:
            this.active = !this.active
        }
    }
}