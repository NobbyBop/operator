const UNIT_PX = 50

// Mouse variables
let MOUSE_X = null
let MOUSE_Y = null
let R_CLICK = 0

// Grid size
let NUM_GRID_COLS = 0
let NUM_GRID_ROWS = 0

let LEVEL = []

const CANVAS = document.getElementById("canvas")
CANVAS.width = 800
CANVAS.height = 450

const CTX = CANVAS.getContext("2d")

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