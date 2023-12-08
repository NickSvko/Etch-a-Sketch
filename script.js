const DEFAULT_GRID_SIZE = 16;
const PRESSED_BACKGROUND = '#2c3e50';
const RELEASE_BACKGROUND  = '#f0f0f0';
const PRESSED_COLOR = 'white';
const RELEASE_COLOR = 'black';
const BOARD_COLOR = 'white';


let mouseDown = false;
const grid = document.querySelector('.grid');
const drawButton = document.querySelector('#drawBtn');
const rainbowButton = document.querySelector('#rainbowBtn');
const eraseButton = document.querySelector('#eraseBtn');
const clearButton = document.querySelector('#clearBtn');
const colorPicker = document.querySelector('#colorPicker');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeDisplay = document.querySelector('#sizeDisplay');
const webPage = document.querySelector('body');

webPage.addEventListener('mousedown', () => mouseDown=true);
webPage.addEventListener('mouseup', () => mouseDown=false);
drawButton.addEventListener('click', drawButtonPressed);
rainbowButton.addEventListener('click', rainbowButtonPressed);
eraseButton.addEventListener('click', eraseButtonPressed);
clearButton.addEventListener('click', clearButtonPressed);
sizeSlider.addEventListener('input', changeGridSize);

createGrid(DEFAULT_GRID_SIZE);


function changeGridSize() {
    let size = sizeSlider.value;
    sizeDisplay.textContent = `${size} x ${size}`;
    removeGridSquares();
    createGrid(size);
    releaseButtons(drawButton, rainbowButton, eraseButton);
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
    releaseButtons(rainbowButton, eraseButton);
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.addEventListener('mouseover', () => colorSquare(square, false)));
}


function rainbowButtonPressed() {
    pressButton(rainbowButton);
    releaseButtons(drawButton, eraseButton);
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.addEventListener('mouseover', () => colorSquare(square, true)));
}

function eraseButtonPressed() {
    pressButton(eraseButton);
    releaseButtons(drawButton, rainbowButton);
    let squares = document.querySelectorAll('.column');
    squares.forEach(square => square.addEventListener('mouseover', () => eraseSquare(square)));
}


function clearButtonPressed() {
    releaseButtons(drawButton, rainbowButton, eraseButton);
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
    square.addEventListener('mouseover', () => colorSquare(square, false));
}


function colorSquare(square, rainbow) {
    if(mouseDown) {
        if(rainbow) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            square.style.backgroundColor = '#' + randomColor;
        }
        else {
            square.style.backgroundColor = colorPicker.value;
        }
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