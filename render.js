// Responsible for rendering graphics to the screen

// How far from the left and top the grid is ON THE CANVAS.
const GRID_OFFSET_X = 50
const GRID_OFFSET_Y = 50

function renderTiles(){
    for(let row=0; row<NUM_GRID_COLS; row++){
        for(let col=0; col<NUM_GRID_ROWS; col++){
            let currentTile = LEVEL[row][col]
            let tileColor = TILES[currentTile].color
            CTX.fillStyle = tileColor
            CTX.fillRect(
                col*UNIT_PX + GRID_OFFSET_X,
                row*UNIT_PX + GRID_OFFSET_Y,
                UNIT_PX,
                UNIT_PX
            )
        }
    }
    CTX.strokeStyle = "black"
    CTX.strokeRect(GRID_OFFSET_X, GRID_OFFSET_Y, NUM_GRID_COLS*UNIT_PX, NUM_GRID_ROWS*UNIT_PX)
}

function renderHighlight(){
    if (MOUSE_X > GRID_OFFSET_X && MOUSE_X < NUM_GRID_COLS*UNIT_PX+GRID_OFFSET_X &&
        MOUSE_Y > GRID_OFFSET_Y && MOUSE_Y < NUM_GRID_ROWS*UNIT_PX+GRID_OFFSET_Y) {
        let targetX = Math.floor((MOUSE_X-GRID_OFFSET_X)/UNIT_PX) * UNIT_PX + GRID_OFFSET_X
        let targetY = Math.floor((MOUSE_Y-GRID_OFFSET_Y)/UNIT_PX) * UNIT_PX + GRID_OFFSET_Y
        CTX.strokeStyle = "yellow"
        CTX.strokeRect(
            targetX,
            targetY,
            UNIT_PX,
            UNIT_PX
        )
    }
}

function render(){
    renderTiles()
    renderHighlight()
}