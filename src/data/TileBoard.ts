import store from '../store/index'

import { Tile } from './Tiles/Tile'
import { Default } from './Tiles/Default'
import { SingleDirection } from './Tiles/SingleDirection'
import { Disabled } from './Tiles/Disabled'
import { Invisible } from './Tiles/Invisible'

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
            //const tile = this.board[x][y]

            // if(tile.type != 'disabled'){
            //     const tileType = tile.getType()
                
            //     switch(tileType){
            //     case 'toggle-up':
            //         tile.toggleActive()
            //         this.ToggleTileLater([x-1,y])
            //         break
            //     case 'toggle-down':
            //         tile.toggleActive()
            //         this.ToggleTileLater([x+1,y])
            //         break
            //     case 'toggle-right':
            //         tile.toggleActive()
            //         this.ToggleTileLater([x,y+1])
            //         break
            //     case 'toggle-left':
            //         tile.toggleActive()
            //         this.ToggleTileLater([x,y-1])
            //         break
            //     default:
            //         tile.toggleActive()
            //         break
            //     }   
            // }
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
                const newTile ={ 
                    x: level.board[i][j].x,
                    y: level.board[i][j].y,
                    type: level.board[i][j].type,
                    active: level.board[i][j].active
                }
                columnArray.push(
                    new Tile(newTile.type, newTile.active, newTile.x, newTile.y)
                );
            }
    
            loadedTileGrid.push(columnArray);
        }
    
        this.board = loadedTileGrid;
    }
    setTileType(x: number, y: number, type: string){
        this.board[x][y] = this.getTileClassObject(type, x, y)
    }
    getTileClassObject(type: string, x: number, y: number){
        switch(type){
            case 'toggle-left':
                return new SingleDirection(false, x, y, 'toggle-left')
            case 'toggle-right':
                return new SingleDirection(false, x, y, 'toggle-right')
            case 'toggle-up':
                return new SingleDirection(false, x, y, 'toggle-up')
            case 'toggle-down':
                return new SingleDirection(false, x, y, 'toggle-down')
            case 'disabled':
                return new Disabled(x, y)
            case 'invisible':
                return new Invisible(x, y)
            default:
                return new Default(false, x, y)
        }
    }
}