function setGridSize(x, y){
    clearGrid()
    NUM_GRID_COLS = x
    NUM_GRID_ROWS = y
    // Reset the level.
    LEVEL = []
    for(let row=0; row < NUM_GRID_ROWS; row++){
        LEVEL.push(new Array(NUM_GRID_COLS).fill(0))
    }
    console.log(LEVEL)
}

function getMouseSquareInfo(){
    if (MOUSE_X > GRID_OFFSET_X && MOUSE_X < NUM_GRID_COLS*UNIT_PX+GRID_OFFSET_X &&
        MOUSE_Y > GRID_OFFSET_Y && MOUSE_Y < NUM_GRID_ROWS*UNIT_PX+GRID_OFFSET_Y) {
        let targetX = Math.floor((MOUSE_X-GRID_OFFSET_X)/UNIT_PX) * UNIT_PX + GRID_OFFSET_X
        let targetY = Math.floor((MOUSE_Y-GRID_OFFSET_Y)/UNIT_PX) * UNIT_PX + GRID_OFFSET_Y
        return {
            x: targetX, 
            y: targetY,
            row: Math.floor((MOUSE_X-GRID_OFFSET_X)/UNIT_PX),
            col: Math.floor((MOUSE_Y-GRID_OFFSET_Y)/UNIT_PX)
        }
    }
    return null
}

function setSquare(tile){
    coords = getMouseSquareInfo()
    if(coords !== null){
        LEVEL[coords.col][coords.row] = tile
    }
    console.log(LEVEL)
}