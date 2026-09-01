const UNIT_PX = 50

// Canvas Size in Pixels
function getCanvasWidth(){
    return CANVAS.getAttribute("width") 
}

function setCanvasWidthPixels(width){
    return CANVAS.setAttribute("width", width) 
}

function getCanvasHeightPixels(){
    return CANVAS.getAttribute("height") 
}

function setCanvasHeightPixels(height){
    return CANVAS.setAttribute("height", height) 
}

// Canvas Size in Units
function getCanvasWidthUnits(){
    return CANVAS.getAttribute("width") / UNIT_PX
}

function setCanvasWidthUnits(width){
    return CANVAS.setAttribute("width", width * UNIT_PX) 
}

function getCanvasHeightUnits(){
    return CANVAS.getAttribute("height") / UNIT_PX
}

function setCanvasHeightUnits(height){
    return CANVAS.setAttribute("height", height * UNIT_PX) 
}