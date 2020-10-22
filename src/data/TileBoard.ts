import store from '../store/index'

import { Tile } from './Tiles/Tile'
import { Default } from './Tiles/Default'
import { SingleDirection } from './Tiles/SingleDirection'
import { Disabled } from './Tiles/Disabled'
import { Invisible } from './Tiles/Invisible'
import { SingleLineDirection } from './Tiles/SingleLineDirection'
import { Tiles } from './Tiles/Tiles'
import { Bomb } from './Tiles/Bomb'

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
    loadLevel(level: any) {
        const loadedTileGrid = []
  
        for(let i = 0; i < this.size; i++){
            const columnArray = [];
    
            for(let j = 0; j < this.size; j++){
                const newTile ={ 
                    x: level.board[i][j].x,
                    y: level.board[i][j].y,
                    type: level.board[i][j].type,
                    active: level.board[i][j].active
                }

                const newTileObject = this.getTileClassObject(newTile.type, newTile.x, newTile.y)

                columnArray.push(
                    //new Tile(newTile.type, newTile.active, newTile.x, newTile.y)
                    newTileObject
                );
            }
    
            loadedTileGrid.push(columnArray);
        }
    
        this.board = loadedTileGrid;
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
        this.board[x][y] = this.getTileClassObject(type, x, y)
    }
    getTileClassObject(type: string, x: number, y: number){
        switch(type){
            case 'single-left':
                return new SingleDirection(false, x, y, 'left')
            case 'single-right':
                return new SingleDirection(false, x, y, 'right')
            case 'single-up':
                return new SingleDirection(false, x, y, 'up')
            case 'single-down':
                return new SingleDirection(false, x, y, 'down')
            case 'line-left':
                return new SingleLineDirection(false, x, y, 'left')    
            case 'line-right':
                return new SingleLineDirection(false, x, y, 'right')
            case 'line-up':
                return new SingleLineDirection(false, x, y, 'up')    
            case 'line-down':
                return new SingleLineDirection(false, x, y, 'down')  
            case 'Disabled':
                return new Disabled(x, y)
            case 'Invisible':
                return new Invisible(x, y)
            case 'Bomb':
                return new Bomb(false, x, y)
            default:
                return new Default(false, x, y)
        }
    }
}