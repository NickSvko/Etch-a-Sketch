let gridSize = 16;
const grid = document.querySelector('.grid');
const drawButton = querySelector('#drawBtn');
const eraseButton = querySelector('#eraseBtn');
const clearButton = querySelector('#ClearBtn');
const colorPicker = querySelector('#colorPicker');
const sizeSlider = querySelector('#sizeSlider');
const sizeDisplay = querySelector('#sizeDisplay');

createGrid(gridSize);


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


