# electron-game

Simple tile based toggling game, where the goal is to activate each tile.

Built to practice my skills with Typescript.

Development Halted due to the *Fun* factor not being met.

## Features

- Levels
- Map Editor
- Conversion of map data to JSON

### Project setup

Requirments;
- NPM / NODEJS

```
git clone https://github.com/lundregan/electron-game.git
npm install
npm run serve
```

### Adding new levels

1. Create a level with the editor
2. Copy to clipboard
3. Use a json formatter for human readability
4. Paste in new level file. EX: src/data/levels/levelData/newLevel.json
5. Make sure to export const as data
