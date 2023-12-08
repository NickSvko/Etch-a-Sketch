const DEFAULT_GRID_SIZE = 16;
const PRESSED_BACKGROUND = 'rgb(110, 113, 115)';
const RELEASE_BACKGROUND  = 'rgb(244, 240, 234)';
const PRESSED_COLOR = 'white';
const RELEASE_COLOR = 'black';
const BOARD_COLOR = 'white';


let mouseDown = false;
const grid = document.querySelector('.grid');
const drawButton = document.querySelector('#drawBtn');
const eraseButton = document.querySelector('#eraseBtn');
const clearButton = document.querySelector('#clearBtn');
const colorPicker = document.querySelector('#colorPicker');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeDisplay = document.querySelector('#sizeDisplay');
const webPage = document.querySelector('body');


createGrid(DEFAULT_GRID_SIZE);

webPage.addEventListener('mousedown', () => mouseDown=true);
webPage.addEventListener('mouseup', () => mouseDown=false);
drawButton.addEventListener('click', drawButtonPressed);
eraseButton.addEventListener('click', eraseButtonPressed);
clearButton.addEventListener('click', clearButtonPressed);
sizeSlider.addEventListener('input', changeGridSize);


function changeGridSize() {
    let size = sizeSlider.value;
    sizeDisplay.textContent = `${size} x ${size}`;
    removeGridSquares();
    createGrid(size);
    releaseButtons(eraseButton, drawButton);
}


function removeGridSquares() {
    let child = grid.lastElementChild;
    while(child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}


function drawButtonPressed() {
    pressButton(drawButton);
    releaseButtons(eraseButton);
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.addEventListener('mouseover', () => colorSquare(square)));
}


function eraseButtonPressed() {
    pressButton(eraseButton);
    releaseButtons(drawButton);
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.addEventListener('mouseover', () => eraseSquare(square)));
}


function clearButtonPressed() {
    releaseButtons(drawButton, eraseButton);
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.style.backgroundColor = BOARD_COLOR);
}


function pressButton(button) {
    button.style.color = PRESSED_COLOR;
    button.style.backgroundColor = PRESSED_BACKGROUND;
}


function releaseButtons(...buttons) {
    buttons.forEach(button => {
        button.style.color = RELEASE_COLOR;
        button.style.backgroundColor = RELEASE_BACKGROUND;
    })
}


function initializeEvents(square) {
    square.addEventListener('mouseover', () => colorSquare(square));
}


function colorSquare(square) {
    if(mouseDown) {
        square.style.backgroundColor = colorPicker.value;
    }
}


function eraseSquare(square) {
    if(mouseDown) {
        square.style.backgroundColor = BOARD_COLOR;
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