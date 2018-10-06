// .row .field .field-inside

function createField(color, colNumber) {
    let field = document.createElement('div');
    field.classList.add('field', color);
    field.setAttribute('col', colNumber);

    let inside = document.createElement('div');
    inside.classList.add('field-inside');

    field.appendChild(inside);

    return field;
}


function createRow(rowNumber) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('row', rowNumber);
    for (let i = 1; i < 9; i++) {
        let color = (i + (rowNumber % 2)) % 2 ? 'white' : 'black'
        let field = createField(color, i);
        row.appendChild(field);
    }
    return row;
}


function drawChessBoard() {
    let board = document.getElementById('board');

    for (let i = 8; i > 0; i--) {
        let row = createRow(i);
        board.appendChild(row);
    }
}

function createFigure(animalName) {
    let figure = document.createElement('div');
    figure.classList.add('figure', animalName);

    return figure;
}

function findField(row, col) {
    let field = document.querySelector(`[row="${row}"] [col="${col}"]`);

    return field;
}


function placeFigure(figureName, row, col) {
    let field = findField(row, col);
    let figure = createFigure(figureName);

    field.children[0].appendChild(figure);   // .fisrtChild
}





