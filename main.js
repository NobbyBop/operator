// Mouse Movement - calculated every mouse move on the entire screen
document.getRootNode().addEventListener("mousemove", function(e){
    const rect = CANVAS.getBoundingClientRect()
    MOUSE_X = e.clientX - rect.x
    MOUSE_Y = e.clientY - rect.y
    document.getElementById("mouse_x").innerText = `MOUSE X:${MOUSE_X}`
    document.getElementById("mouse_y").innerText = `MOUSE Y:${MOUSE_Y}`
})

// Listener for resizing grid
const submitButton = document.getElementById("set-button")
submitButton.addEventListener("click", () => {
    let inputField = document.getElementById("grid-input")
    console.log("setting grid size")
    setGridSize(inputField.value, inputField.value)
})

// Listener for clicks
CANVAS.addEventListener("mousedown", function(e){
    let selectedTile = document.getElementById("tile-select").value
    console.log("selcted:", selectedTile)
    setSquare(selectedTile)
})

setGridSize(5, 5)
render()