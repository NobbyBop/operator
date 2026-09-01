// Responsible for rendering graphics to the screen



function clearGrid(){
    CTX.clearRect(GRID_OFFSET_X-1, GRID_OFFSET_Y-1, NUM_GRID_COLS*UNIT_PX+2, NUM_GRID_ROWS*UNIT_PX+2)
}

function renderTiles(){
    for(let row=0; row<NUM_GRID_COLS; row++){
        for(let col=0; col<NUM_GRID_ROWS; col++){
            let currentTile = LEVEL[row][col]
            let tileColor = TILES[Number.parseInt(currentTile)]["color"]
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
    let coords = getMouseSquareInfo()
    if (coords !== null) {
        CTX.strokeStyle = "yellow"
        CTX.strokeRect(
            coords.x,
            coords.y,
            UNIT_PX,
            UNIT_PX
        )
    }
}

function render(){
    console.log("rendering")
    renderTiles()
    renderHighlight()
    window.requestAnimationFrame(render)
}