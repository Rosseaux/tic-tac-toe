# tic-tac-toe

### Plan
Steps:
- Figure out how to store the game board as an array inside an object...
- Create the player objects, and the main game object to keep score/track of blocks filled
- Add the HTML to tie the array input to a grid design 
    add the functionality then to this to allow players to click on a square and fill it in with their marker
- Add the scoring logic if not already done in step 2
- Clean up interface and design, make it pretty
- Have a go at creating the AI opponent


### UPDATE 1
I've got the grid array set up, and therefore I can push an array item into an individual players scoring array. This SHOULD look something like this:
        >player clicks a square
        >function reads the corresponding grid array index and adds it to their tracker array
        >scoring function then reads each players tracker array, and using if (or switch) statements: 
            >checks to see if they have 3 in a row horizontally, vertically, diagonally
            >ends the game if this is met

So far, I can't seem to get the function to actually push the grid index into the tracker array for a single player, it keeps returning "undefinedgrid#", and then "undefinedgrid#grid#" instead of actually reading it as an array.

Foundations are there, the pieces just need to click.

### Update 3
Array is pushing successfully to both player One and Player Two tracker arrays, groundwork is now set for scoring tests to be set.