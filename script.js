let gridSize = 16;
const grid = document.querySelector('.grid');
const drawButton = document.querySelector('#drawBtn');
const eraseButton = document.querySelector('#eraseBtn');
const clearButton = document.querySelector('#ClearBtn');
const colorPicker = document.querySelector('#colorPicker');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeDisplay = document.querySelector('#sizeDisplay');

/* Defines whether the mouse is currently pressed to know whether to make changes to the board */
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


createGrid(gridSize);
drawButton.addEventListener('click', draw);


function draw() {
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.addEventListener('mouseover', () => colorSquare(square)));
}

function initializeEvents(square) {
    square.addEventListener('mouseover', () => colorSquare(square));
    square.addEventListener('onmouseup')
}

function colorSquare(square) {
    if(mouseDown) {
        square.style.backgroundColor = colorPicker.value;
    }
}

function createGrid(size) {
    let line;
    for(let i = 1; i <= size; i++) {
        line = document.createElement('div');
        line.setAttribute('class', `line l${i}`)
        createColumns(line, size);
        grid.appendChild(line);
    }
}

function createColumns(line, size) {
    let column;
    for(i = 1; i <= size; i++) {
        column = document.createElement('div');
        column.setAttribute('class',``);
        column.setAttribute('class',  `column c${i}`)
        line.appendChild(column);
    }
}


