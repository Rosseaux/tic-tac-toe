const grid = { 
        gridspaces: ["grid1", "grid2", "grid3", "grid4", "grid5", "grid6", "grid7", "grid8", "grid9"]
}

const playerOnePlaces = {
    places: []
}

const playerTwoPlaces = {
    places: []
}

function playerMoves(player, placement) {
    if (playerOnePlaces.places.includes(placement) || playerTwoPlaces.places.includes(placement)) {
        console.log("This space is already taken!");
    }
    else {
        if (player === "playerOne") {
        playerOnePlaces.places.push(placement);
        winCheck();
        console.log(playerOnePlaces.places);
    }
        if (player === "playerTwo") {
        playerTwoPlaces.places.push(placement);
        winCheck();
        console.log(playerTwoPlaces.places);
    }
}
}

function winCheck() {
    if (playerOnePlaces.places.includes("grid1" && "grid2" && "grid3") ||
    playerOnePlaces.places.includes("grid1" && "grid4" && "grid7") ||
    playerOnePlaces.places.includes("grid2" && "grid5" && "grid8") ||
    playerOnePlaces.places.includes("grid3" && "grid6" && "grid9") ||
    playerOnePlaces.places.includes("grid4" && "grid5" && "grid6") ||
    playerOnePlaces.places.includes("grid7" && "grid8" && "grid9") ||
    playerOnePlaces.places.includes("grid1" && "grid5" && "grid9") ||
    playerOnePlaces.places.includes("grid3" && "grid5" && "grid7")) {
        console.log("PLAYER ONE WINS!!!");
    }
    if (playerTwoPlaces.places.includes("grid1"&& "grid2" && "grid3") ||
    playerTwoPlaces.places.includes("grid1" && "grid4" && "grid7") ||
    playerTwoPlaces.places.includes("grid2" && "grid5" && "grid8") ||
    playerTwoPlaces.places.includes("grid3" && "grid6" && "grid9") ||
    playerTwoPlaces.places.includes("grid4" && "grid5" && "grid6") ||
    playerTwoPlaces.places.includes("grid7" && "grid8" && "grid9") ||
    playerTwoPlaces.places.includes("grid1" && "grid5" && "grid9") ||
    playerTwoPlaces.places.includes("grid3" && "grid5" && "grid7")) {
        console.log("PLAYER TWO WINS!!!");
    }
}

