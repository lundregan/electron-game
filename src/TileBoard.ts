import { Tile } from './Tile'

export class TileBoard {
    size: number
    board: Array<Array<Tile>>

    constructor(size: number){
      this.size = size
      this.board = []
      this.generateBoard()
    }
    generateBoard() {
      const generatedTileGrid = [];
  
      for(let i = 0; i < this.size; i++){
        const columnArray = [];
  
        for(let j = 0; j < this.size; j++){
          columnArray.push(
            new Tile('default', false, i, j)
          );
        }
  
        generatedTileGrid.push(columnArray);
      }
  
      this.board = generatedTileGrid;
    }
    toggleTile(x: number, y: number) {
        if(!this.outOfBounds(x, y)){
            const tile = this.board[x][y]
            const tileType = tile.getType()
            
            switch(tileType){
            case 'toggle-up':
                this.toggleTile(x-1, y)
                break
            case 'toggle-down':
                this.toggleTile(x+1, y)
                break
            case 'toggle-right':
                this.toggleTile(x, y+1)
                break
            case 'toggle-left':
                this.toggleTile(x, y-1)
                break
            default:
                tile.toggleActive
                break
            }

            tile.toggleActive
        }
    }
    outOfBounds(x: number, y: number){
        if(
            x < 0 ||
            y < 0 ||
            x > this.size ||
            y > this.size
        ){
            return true
        }

        return false
    }
}