import store from '../store/index'

import { Tile } from './Tiles/Tile'
import { Default } from './Tiles/Default'
import { Tiles } from './Tiles/Tiles'


export class TileBoard {
    size: number
    board: Array<Array<Tile>>
    tiles: Tiles

    constructor(size: number){
      this.size = size
      this.board = [[new Tile('default', true, 0, 0)]]
      this.generateBoard()
      this.tiles = new Tiles()
    }

    generateBoard() {
      const generatedTileGrid = [];
  
      for(let i = 0; i < this.size; i++){
        const columnArray = [];
  
        for(let j = 0; j < this.size; j++){
          columnArray.push(
            new Default(false, i, j)
          );
        }
  
        generatedTileGrid.push(columnArray);
      }
  
      this.board = generatedTileGrid;
    }

    ToggleTileLater(cords: Array<number>){
        setTimeout(() => {
            store.dispatch('toggleTile', cords)
        },
            100
        );
    }

    toggleTile(x: number, y: number) {
        if(!this.outOfBounds(x, y)){
            this.board[x][y].toggle()
        }
    }

    outOfBounds(x: number, y: number){
        if(
            x < 0 ||
            y < 0 ||
            x > this.size -1 ||
            y > this.size -1
        ){
            return true
        }

        return false
    }

    loadJson(levelData: any){
        const loadedTileGrid = []

        for(let i = 0; i < levelData.size; i++){
            const columnArray = [];
    
            for(let j = 0; j < levelData.size; j++){
                const oldTile = levelData.board[i][j]

                columnArray.push(
                    this.tiles.newTile(
                        oldTile.type,
                        oldTile.x,
                        oldTile.y,
                        oldTile.active,
                        oldTile.direction ? oldTile.direction : null
                    )
                )
                
            }
            loadedTileGrid.push(columnArray);
        }

        console.log(loadedTileGrid)
        this.board = loadedTileGrid;
    }

    setTileType(x: number, y: number, type: string){
        this.board[x][y] = this.tiles.newTile(type, x, y, false, null)
    }
    
}