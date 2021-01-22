//making a game state so when the game is won no more buttons can be pushed
//figuring out a clean way to make the wincheck, I COULD manually plug it in, but simpler solutions needed.

let turnCounter = 0; //this is to dictate a draw if there is no wincon on buttonpush

let playerXWins= 0;
let playerOWins= 0;
let currentWin =0;

function playerTurn() {
    if (turnCounter % 2 ==0) {
        return "O";
    }
    else {
        return "X";

    }    
    
}

let winCon = 
[[0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
]

let cellArray = document.getElementsByClassName("cell");
let playerX = document.getElementsByClassName("playerX").innerHTML;
let playerO = document.getElementsByClassName("playerY").innerHTML;



function checkWin() {
    let cellArray = document.getElementsByClassName("cell");
    for (i=0; i< 8; i++){
        
        if (cellArray[winCon[i][0]].innerHTML=="X" && cellArray[winCon[i][1]].innerHTML =="X" && cellArray[winCon[i][2]].innerHTML =="X" ){
            console.log("winner!");
            playerXWins ++;
            currentWin = 1;
            return document.getElementById("playerX").innerHTML = playerXWins
            
            
        }
        else if(cellArray[winCon[i][0]].innerHTML =="O" && cellArray[winCon[i][1]].innerHTML =="O" && cellArray[winCon[i][2]].innerHTML =="O"){
            console.log("O WINNER");
            playerOWins ++;
            currentWin = 1;
            return document.getElementById("playerO").innerHTML = playerOWins;

        }
    }
        
    return console.log(cellArray);
    }


function checkGameState(){};//some sort of check if the max turns for draw, + checking if either player won

function pushBtn(btn){
    if (currentWin == 0) { //stops from pushing more buttons after a win
        if (btn.innerHTML == "test "){
            btn.innerHTML = playerTurn();//placeholder for X'S and O'S
            turnCounter+=1;
            checkWin();

        }
        else {
            alert("no cheating!");
        }
        }

};

function btnReset() {
    currentWin=0;
    turnCounter=0;
    for (i=0; i<9; i++){
        cellArray[i].innerHTML = "test ";
    }
    
    
}