function setEventListeners() {
    var figures = document.querySelectorAll('.figure');

    for (let i of figures) {
        i.addEventListener('click', showPossibleMoves);
    }

    document.addEventListener('click', function (event) {
        if (event.target.closest('.possible_move')) {
            // let row = +event.target.closest('.row').getAttribute('row');
            // let col = +event.target.closest('.col').getAttribute('col');

            moveFigure(event.target.closest('.possible_move'));
        } else {
            hideAllPossibleMoves();
        }
    });

}

function moveFigure(movetoField) {
    let fromCol = movetoField.dataset.fromCol;
    let fromRow = movetoField.dataset.fromRow;
    let figure = findField(fromRow, fromCol).querySelector('.figure');
    movetoField.firstChild.appendChild(figure);
    hideAllPossibleMoves();
}

function hideAllPossibleMoves() {
    let items = document.querySelectorAll('.possible_move');
    for (let i of items) {
        i.classList.remove('possible_move');
    }
}

function showPossibleMoves(e) {
    e.stopPropagation();
    hideAllPossibleMoves();
    let clickedFigure = e.target;
    let col = +clickedFigure.closest('.field').getAttribute("col");
    let row = +clickedFigure.closest('.row').getAttribute("row");

    let newRow = clickedFigure.classList.contains("wolf") ? row - 1 : row + 1;
    let colLeft = col - 1;
    let colRight = col + 1;

    if (newRow < 1 || newRow > 8) {
        return;
    }
    if (colLeft > 0 && colLeft < 9 && isFieldEmpty(newRow, colLeft)) {
        let field = findField(newRow, colLeft);
        field.classList.add('possible_move');
        field.dataset.fromCol =  col;
        field.dataset.fromRow =  row;
    }
    if (colRight > 0 && colRight < 9 && isFieldEmpty(newRow, colRight)) {
        let field = findField(newRow, colRight);
        field.classList.add('possible_move');
        field.dataset.fromCol =  col;
        field.dataset.fromRow =  row;
    }

    // console.log(row, col, e);
    // debugger;
}


function isFieldEmpty(row, col) {
    return !findField(row, col).querySelector('.figure');
}