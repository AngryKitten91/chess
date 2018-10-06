
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    //Draw board
    drawChessBoard();
    
    //Draw pawns
    placeFigure('wolf', 8,4);
    placeFigure('sheep', 1,1);
    placeFigure('sheep', 1,3);
    placeFigure('sheep', 1,5);
    placeFigure('sheep', 1,7);

    //Add movement
    setEventListeners();


    //Reset
    setResetButton();
    //One party moves at time

    //Winning condition checking

});