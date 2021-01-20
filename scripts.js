let turnCounter = 0;

function playerTurn() {
    if (turnCounter % 2 ==0) {
        return true;
        return turnCounter +1;
    }
    else {
        return false;
        return turncounter +1;
    }
}

function checkGameState(){};//some sort of check if the max turns for draw, + checking if either player won

function pushBtn(btn){
    

    btn.innerHTML = 0;//placeholder for X'S and O'S
    return console.log(btn);
    

};

