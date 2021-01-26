//making a game state so when the game is won no more buttons can be pushed
//figuring out a clean way to make the wincheck, I COULD manually plug it in, but simpler solutions needed.

let turnCounter = 0; //this is to dictate a draw if there is no wincon on buttonpush

let playerXWins= 0;
let playerOWins= 0;
let currentWin =0;
let draw = 0;


function playerTurn() { //even returns O odds returns x, O always starts first (that's how i played it)
    if (turnCounter % 2 ==0) {
        return "O";
    }
    else {
        return "X";

    }    
    
}

let winCon = //possible win conditions rox, colums and diagnol
[[0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
]

let cellArray = document.getElementsByClassName("cell"); //this makes an array of all cells




function checkWin() {
    let cellArray = document.getElementsByClassName("cell");//updates current cells everytime checkwin is called.
    for (i=0; i< 8; i++){// checks through all win conditions
        
        if (cellArray[winCon[i][0]].innerHTML=="X" && cellArray[winCon[i][1]].innerHTML =="X" && cellArray[winCon[i][2]].innerHTML =="X" ){
            console.log("winner!");
            playerXWins ++;
            currentWin = 1;
            document.getElementById("playerX").innerHTML = playerXWins
            document.getElementById("playerTurnDisplay").innerHTML = document.getElementById("playerXNameZone").innerHTML + " WON!"

            
            
            
        }
        else if(cellArray[winCon[i][0]].innerHTML =="O" && cellArray[winCon[i][1]].innerHTML =="O" && cellArray[winCon[i][2]].innerHTML =="O"){
            console.log("O WINNER");
            playerOWins ++;
            currentWin = 1;
            document.getElementById("playerTurnDisplay").innerHTML = document.getElementById("playerONameZone").innerHTML + " WON!"
            document.getElementById("playerO").innerHTML = playerOWins;
            
            

        }
    }
    
 }


function pushBtn(btn){
    if (currentWin == 0 ) { //stops from pushing more buttons after a win
        if(turnCounter<8){
            if (btn.innerHTML == "test "){
                btn.innerHTML = playerTurn();//placeholder for X'S and O'S
                turnCounter+=1;
                if (playerTurn() == "X"){ //player turndisplay update
                    document.getElementById("playerTurnDisplay").innerHTML= document.getElementById("playerXNameZone").innerHTML + "'s Turn!"

                }
                else {
                    document.getElementById("playerTurnDisplay").innerHTML = document.getElementById("playerONameZone").innerHTML + "'s Turn!"
                }            
                checkWin();


            }
            else {
                alert("no cheating!");
            }
        }
        else {
            draw++
            currentWin++
            btn.innerHTML = playerTurn();
            document.getElementById("draw").innerHTML = draw;
            document.getElementById("playerTurnDisplay").innerHTML = "DRAW!"
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

document.getElementById("playerOName")
document.getElementById("playerXName")

function onClickO() {
    var message = document.getElementById("playerOName").value;
    document.getElementById('playerONameZone').innerHTML ="Player " + message;
    document.getElementById("playerTurnDisplay").innerHTML = document.getElementById("playerONameZone").innerHTML + "'s Turn!"
};

function onClickX() {
    var message = document.getElementById("playerXName").value;
    document.getElementById("playerXNameZone").innerHTML= "Player " + message;
}
