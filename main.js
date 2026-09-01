// Mouse movement in the Canvas

document.getRootNode().addEventListener("mousemove", function(e){
    const rect = CANVAS.getBoundingClientRect()
    if (e.clientX > rect.right || e.clientX < rect.left || e.clientY > rect.bottom || e.clientY < rect.top){
        MOUSE_X = null
        MOUSE_Y = null
    } else {
        MOUSE_X = e.clientX - rect.x
        MOUSE_Y = e.clientY - rect.y
    }
    renderGrid()
    document.getElementById("mouse_x").innerText = `MOUSE X:${MOUSE_X}`
    document.getElementById("mouse_y").innerText = `MOUSE Y:${MOUSE_Y}`
})

const submitButton = document.getElementById("button")
submitButton.addEventListener("click", () => {
    let inputField = document.getElementById("grid-input")
    setGridSize(inputField.value, inputField.value)
})

let inputField = document.getElementById("grid-input").value = "5"
setGridSize(5, 5)
renderGrid()