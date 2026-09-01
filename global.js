let MOUSE_X = null
let MOUSE_Y = null
let R_CLICK = 0

const CANVAS = document.getElementById("canvas")

const TILES = {
    0: {
        name: "empty",
        color: "white"
    },
    1: {
        name: "block",
        color: "black"
    },
    2: {
        name: "bridge",
        color: "blue"    
    }
}