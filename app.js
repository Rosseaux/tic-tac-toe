
//Set the array items for the grid, and player trackers
const grid = { 
        gridspaces: ["grid1", "grid2", "grid3", "grid4", "grid5", "grid6", "grid7", "grid8", "grid9"]
}
const playerOnePlaces = [];
    
const playerTwoPlaces = [];

//scoring variables
var playerOneScore = 0;
var playerTwoScore = 0;

var playerState = "playerOne";

const winSpaces = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

document.getElementById("playerOneScore").innerHTML += playerOneScore;
document.getElementById("playerTwoScore").innerHTML += playerTwoScore;

//function to be called when a player clicks a square
function playerMoves(player, placement) {
    if (playerOnePlaces.includes(placement) || playerTwoPlaces.includes(placement)) {
        console.log("This space is already taken!");
    }
    else {
        if (player === "playerOne") {
        playerOnePlaces.push(placement);
        playerState = "playerTwo";
    }
        if (player === "playerTwo") {
        playerTwoPlaces.push(placement);
        playerState = "playerOne";
    }
}
}


//function called each time a move is made to see if anyone has won 
function winCheckX() {
    return winSpaces.some((playerOnePlaces) => {
        return playerOnePlaces.every((i) => {
            console.log(grid.gridspaces[i].innerText === "X");
            return grid.gridspaces[i].innerText === "X";
        })
    })
};

function winCheckO() {
    return winSpaces.some((playerTwoPlaces) => {
        return playerTwoPlaces.every((i) => {
            console.log(grid.gridspaces[i].innerText === "O");
            return grid.gridspaces[i].innerText === "O";
        })
    })
};



//grid creation function 
function setGrid() {
    let gameBoard = document.getElementById("gameBoard");
    grid.gridspaces.forEach(function (gridItem) {
        let boardSpace = document.createElement("div");
        boardSpace.className = "boardSpace";
        boardSpace.id = gridItem;
        gameBoard.appendChild(boardSpace);
        boardSpace.addEventListener("click", () => {
            playerMoves(playerState, boardSpace.id);
            console.log(playerOnePlaces);
            console.log(playerTwoPlaces);
            if (playerState === "playerOne") {
                boardSpace.innerText = "X";
                winCheckX();
                }
            
            if (playerState === "playerTwo") {
                boardSpace.innerText = "O";
                winCheckO();
            }
                
        })
        
    })
    
}


setGrid();
