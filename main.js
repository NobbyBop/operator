console.log("test")

const UNIT_PX = 50
function setGridSize(x, y){
    const canvas = document.getElementById("canvas")
    canvas.setAttribute("width", x*UNIT_PX)
    canvas.setAttribute("height", y*UNIT_PX)
    renderGrid()
}

function drawSquare(row, col){
    const canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    var start_x = row*UNIT_PX
    var start_y = col*UNIT_PX
    ctx.moveTo(start_x, start_y)
    ctx.lineTo(start_x+UNIT_PX, start_y)
    ctx.lineTo(start_x+UNIT_PX, start_y-UNIT_PX)
    ctx.lineTo(start_x, start_y-UNIT_PX)
    ctx.lineTo(start_x, start_y)
    ctx.stroke()
}

function renderGrid(){
    const canvas = document.getElementById("canvas")
    spaces_x = canvas.getAttribute("width")/50
    console.log(spaces_x)
    spaces_y = canvas.getAttribute("height")/50
    console.log(spaces_y)
    for(let rows = 0; rows < spaces_x; rows++){
        for(let cols = 0; cols < spaces_y; cols++){
            drawSquare(rows, cols)
        }
    }
}

const submitButton = document.getElementById("button")
submitButton.addEventListener("click", () => {
    let inputField = document.getElementById("input")
    setGridSize(inputField.value, inputField.value)
})