// Mouse Movement - calculated every mouse move on the entire screen
document.getRootNode().addEventListener("mousemove", function(e){
    const rect = CANVAS.getBoundingClientRect()
    // if (e.clientX > rect.right || e.clientX < rect.left || e.clientY > rect.bottom || e.clientY < rect.top){
    //     MOUSE_X = null
    //     MOUSE_Y = null
    // } else {
    //     MOUSE_X = e.clientX - rect.x
    //     MOUSE_Y = e.clientY - rect.y
    // }
    MOUSE_X = e.clientX - rect.x
    MOUSE_Y = e.clientY - rect.y
    document.getElementById("mouse_x").innerText = `MOUSE X:${MOUSE_X}`
    document.getElementById("mouse_y").innerText = `MOUSE Y:${MOUSE_Y}`
    render()
})

// // Listener for placing tiles.
// CANVAS.addEventListener("mousedown", function(e){
//     let selectedTile = document.getElementById("tile-select").value
//     setSquare(MOUSE_X, MOUSE_Y, selectedTile)
// })

// // Listener for resizing grid
// const submitButton = document.getElementById("set-button")
// submitButton.addEventListener("click", () => {
//     let inputField = document.getElementById("grid-input")
//     setGridSize(inputField.value, inputField.value)
// })

// const exportButton = document.getElementById("")

// let inputField = document.getElementById("grid-input").value = "5"
// setGridSize(5, 5)
NUM_GRID_COLS=5
NUM_GRID_ROWS=5
LEVEL = [
    [0, 1, 2, 0, 1],
    [2, 0, 1, 2, 0],
    [1, 2, 0, 1, 2],
    [0, 1, 2, 0, 1],
    [2, 0, 1, 2, 0]
]
LEVEL = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]
console.log(LEVEL[0][0])
console.log(LEVEL[0][1])
console.log(LEVEL[0][2])
renderTiles()