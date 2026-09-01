// Mouse movement in the Canvas
CANVAS.addEventListener("mousemove", function(e){
    const rect = CANVAS.getBoundingClientRect()
    MOUSE_X = e.clientX - rect.x
    MOUSE_Y = e.clientY - rect.y
    renderGrid()
    document.getElementById("mouse_x").innerText = `MOUSE X:${MOUSE_X}`
    document.getElementById("mouse_y").innerText = `MOUSE Y:${MOUSE_Y}`
})

const submitButton = document.getElementById("button")
submitButton.addEventListener("click", () => {
    let inputField = document.getElementById("input")
    setGridSize(inputField.value, inputField.value)
})