import { Tile } from './Tile'

export class TileBoard {
    size: number
    board: Array<Array<Tile>>

    constructor(size: number){
      this.size = size
      this.board = [[new Tile('default', true, 0, 0)]]
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

            if(tile.type != 'disabled'){
                const tileType = tile.getType()
                
                switch(tileType){
                case 'toggle-up':
                    tile.toggleActive()
                    this.toggleTile(x-1, y)
                    break
                case 'toggle-down':
                    tile.toggleActive()
                    this.toggleTile(x+1, y)
                    break
                case 'toggle-right':
                    tile.toggleActive()
                    this.toggleTile(x, y+1)
                    break
                case 'toggle-left':
                    tile.toggleActive()
                    this.toggleTile(x, y-1)
                    break
                default:
                    tile.toggleActive()
                    break
                }   
            }
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
    loadLevel(level: any) {
        
        

        const loadedTileGrid = [];
  
        for(let i = 0; i < this.size; i++){
            const columnArray = [];
    
            for(let j = 0; j < this.size; j++){

                const tileX = level.board[i][j].x
                const tileY = level.board[i][j].y
                const tileType = level.board[i][j].type
                const tileActive = level.board[i][j].active
            columnArray.push(
                new Tile(tileType, tileActive, tileX, tileY)
            );
            }
    
            loadedTileGrid.push(columnArray);
        }
    
        this.board = loadedTileGrid;
    }
}