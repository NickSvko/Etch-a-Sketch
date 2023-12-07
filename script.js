const GRID_SIZE = 16;
const grid = document.querySelector('.grid');
createGrid();


function createGrid() {
    let line;
    for(let i = 1; i <= GRID_SIZE; i++) {
        line = document.createElement('div');
        line.setAttribute('class', `line l${i}`)
        createColumns(line);
        grid.appendChild(line);
    }
}

function createColumns(line) {
    let column;
    for(i = 1; i <= GRID_SIZE; i++) {
        column = document.createElement('div');
        column.setAttribute('class',``);
        column.setAttribute('class',  `column c${i}`)
        line.appendChild(column);
    }
}
