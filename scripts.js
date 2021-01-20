let turnCounter = 0;

let playerXWins= 0;
let playerOWins= 0;

function playerTurn() {
    if (turnCounter % 2 ==0) {
        return "O";
    }
    else {
        return "X";
        
    }
    
}

function checkWin() {
    let cellArray = document.getElementsByClassName("cell");

    if (cellArray[0,1,2].innerHTML=="X" || cellArray [0,1,2].innerHTML =="O"){
        console.log("winner!")
    }
    else {};
    return console.log(cellArray);
}

function checkGameState(){};//some sort of check if the max turns for draw, + checking if either player won

function pushBtn(btn){
    
    if (btn.innerHTML == "test "){
        btn.innerHTML = playerTurn();//placeholder for X'S and O'S
        turnCounter+=1;
        checkWin();
    }
    else {
        alert("no cheating!");
    }

};

