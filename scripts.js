//making a game state so when the game is won no more buttons can be pushed
//figuring out a clean way to make the wincheck, I COULD manually plug it in, but simpler solutions needed.

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
 
    if (cellArray[0].innerHTML=="X" && cellArray[1].innerHTML =="X" && cellArray[2].innerHTML =="X"){
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