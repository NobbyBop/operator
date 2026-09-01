function setGridSize(x, y){
    setCanvasHeightUnits(x)
    setCanvasWidthUnits(y)
    renderGrid()
}

function drawSquare(row, col){
    var ctx = CANVAS.getContext("2d")
    if (isBetweenExclusive(row*UNIT_PX, row*UNIT_PX+UNIT_PX, MOUSE_X) &&
        isBetweenExclusive(col*UNIT_PX, col*UNIT_PX+UNIT_PX, MOUSE_Y) &&
        (MOUSE_X !== null && MOUSE_Y !== null)
        ) {
        ctx.fillRect(row*UNIT_PX, col*UNIT_PX, UNIT_PX, UNIT_PX)
    } else {
        // TODO - Render the saved placed tile that exists at this (row, col)
        ctx.clearRect(row*UNIT_PX, col*UNIT_PX, UNIT_PX, UNIT_PX)
        ctx.strokeRect(row*UNIT_PX, col*UNIT_PX, UNIT_PX, UNIT_PX)
    }
}

function renderGrid(){
    spaces_x = getCanvasWidthUnits()
    spaces_y = getCanvasHeightUnits()
    for(let rows = 0; rows < spaces_x; rows++){
        for(let cols = 0; cols < spaces_y; cols++){
            drawSquare(rows, cols)
        }
    }
}