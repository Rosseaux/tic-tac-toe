
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
        winCheck();
        playerState = "playerTwo";
    }
        if (player === "playerTwo") {
        playerTwoPlaces.places.push(placement);
        winCheck();
        playerState = "playerOne";
    }
}
}

//function called each time a move is made to see if anyone has won 
function winCheck() {
    if (playerOnePlaces.places.includes("grid1" && "grid2" && "grid3") ||
    playerOnePlaces.places.includes("grid1" && "grid4" && "grid7") ||
    playerOnePlaces.places.includes("grid2" && "grid5" && "grid8") ||
    playerOnePlaces.places.includes("grid3" && "grid6" && "grid9") ||
    playerOnePlaces.places.includes("grid4" && "grid5" && "grid6") ||
    playerOnePlaces.places.includes("grid7" && "grid8" && "grid9") ||
    playerOnePlaces.places.includes("grid1" && "grid5" && "grid9") ||
    playerOnePlaces.places.includes("grid3" && "grid5" && "grid7")) {
        playerOneScore++;
        window.alert("PLAYER ONE WINS");
    }
    if (playerTwoPlaces.places.includes("grid1"&& "grid2" && "grid3") ||
    playerTwoPlaces.places.includes("grid1" && "grid4" && "grid7") ||
    playerTwoPlaces.places.includes("grid2" && "grid5" && "grid8") ||
    playerTwoPlaces.places.includes("grid3" && "grid6" && "grid9") ||
    playerTwoPlaces.places.includes("grid4" && "grid5" && "grid6") ||
    playerTwoPlaces.places.includes("grid7" && "grid8" && "grid9") ||
    playerTwoPlaces.places.includes("grid1" && "grid5" && "grid9") ||
    playerTwoPlaces.places.includes("grid3" && "grid5" && "grid7")) {
        playerTwoScore++;
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
            console.log(playerOnePlaces.places);
            console.log(playerTwoPlaces.places);
            if (playerState === "playerOne") boardSpace.innerHTML = "X";
            if (playerState === "playerTwo") boardSpace.innerHTML = "O";
        })
        
    })
    
}

setGrid();
