
//Set the array items for the grid, and player trackers
const grid = { 
        gridspaces: ["grid1", "grid2", "grid3", "grid4", "grid5", "grid6", "grid7", "grid8", "grid9"]
}
const playerOnePlaces = {
    places: []
}
const playerTwoPlaces = {
    places: []
}
//scoring variables
var playerOneScore = 0;
var playerTwoScore = 0;

var playerState = "playerOne";


document.getElementById("playerOneScore").innerHTML += playerOneScore;
document.getElementById("playerTwoScore").innerHTML += playerTwoScore;

//function to be called when a player clicks a square
function playerMoves(player, placement) {
    if (playerOnePlaces.places.includes(placement) || playerTwoPlaces.places.includes(placement)) {
        console.log("This space is already taken!");
    }
    else {
        if (player === "playerOne") {
        playerOnePlaces.places.push(placement);
        playerState = "playerTwo";
        console.log(playerState);
        winCheckOne();
    }
        if (player === "playerTwo") {
        playerTwoPlaces.places.push(placement);
        playerState = "playerOne";
        console.log(playerState);
        winCheckTwo();
    }
}
}
//1 4 7
//2 5 8
//3 6 9
//4 5 6
//7 8 9
//1 5 9
//3 5 7

//function called each time a move is made to see if anyone has won 
function winCheckOne() {
    if (playerOnePlaces.places.includes("grid1") && playerOnePlaces.places.includes("grid2") && 
    playerOnePlaces.places.includes("grid3")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid1") && playerOnePlaces.places.includes("grid4") && 
    playerOnePlaces.places.includes("grid7")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid2") && playerOnePlaces.places.includes("grid5") && 
    playerOnePlaces.places.includes("grid8")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid3") && playerOnePlaces.places.includes("grid6") && 
    playerOnePlaces.places.includes("grid9")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid4") && playerOnePlaces.places.includes("grid5") && 
    playerOnePlaces.places.includes("grid6")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid7") && playerOnePlaces.places.includes("grid8") && 
    playerOnePlaces.places.includes("grid9")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid1") && playerOnePlaces.places.includes("grid5") && 
    playerOnePlaces.places.includes("grid9")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
    else if (playerOnePlaces.places.includes("grid3") && playerOnePlaces.places.includes("grid5") && 
    playerOnePlaces.places.includes("grid7")) {
        playerOneScore++
        window.alert("PLAYER ONE WINS");
    }
}

function winCheckTwo() {
    if (playerTwoPlaces.places.includes("grid1") && playerTwoPlaces.places.includes("grid2") && 
    playerTwoPlaces.places.includes("grid3")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid1") && playerTwoPlaces.places.includes("grid4") && 
    playerTwoPlaces.places.includes("grid7")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid2") && playerTwoPlaces.places.includes("grid5") && 
    playerTwoPlaces.places.includes("grid8")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid3") && playerTwoPlaces.places.includes("grid6") && 
    playerTwoPlaces.places.includes("grid9")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid4") && playerTwoPlaces.places.includes("grid5") && 
    playerTwoPlaces.places.includes("grid6")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid7") && playerTwoPlaces.places.includes("grid8") && 
    playerTwoPlaces.places.includes("grid9")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid1") && playerTwoPlaces.places.includes("grid5") && 
    playerTwoPlaces.places.includes("grid9")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
    else if (playerTwoPlaces.places.includes("grid3") && playerTwoPlaces.places.includes("grid5") && 
    playerTwoPlaces.places.includes("grid7")) {
        playerTwoScore++
        window.alert("PLAYER TWO WINS");
    }
}


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
            if (playerState === "playerOne") {
                boardSpace.innerHTML = "X";
            }
            if (playerState === "playerTwo") {
                boardSpace.innerHTML = "O";
            }
                
            }
        
        
    )})

        }


setGrid();
