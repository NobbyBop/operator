function setGridSize(x, y){
    NUM_GRID_COLS = x
    NUM_GRID_ROWS = y

    // Reset the level.
    LEVEL = []
    for(let col = 0; col < NUM_GRID_ROWS; col++){
        LEVEL.push(Array.apply(null, Array(NUM_GRID_COLS)).map(() => { return 0 }))
    }}

function setSquare(row, col, tile){
    LEVEL[row][col] = tile
    drawSquare(row, col)
}