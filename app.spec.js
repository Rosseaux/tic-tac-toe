const { expect } = require("@jest/globals");
const { test } = require("picomatch");
const winCheck = require("./app");

test("One Plus One", () => {
    expect(1+1).toBe(2);
}
);


// describe ("Checks if player wins with grid outcomes", () => {
//     test("PlayerOne Horizontal 1", () => {
//         playerOnePlaces.places = ["grid1", "grid2", "grid3"]
//         expect(winCheck()).toBe("PLAYER ONE WINS");
//     });
// });