// Pseudo for Sliding Puzzle

// Create a 4x4 Grid with each tile being an object with their own key and properties
// Let one tile be named: 'E' for our empty square

// In a sliding puzzle, the tiles on the grid must be arranged and manipulated by the player to fulfill a certain arrangement and create a picture
// In a coding sense, we can describe this win condition with an array, with numbers representing the 'key' for each tile
// For example:

// let win = ['e', '1', '2', '3'
//            '4', '5', '6', '7'
//            '8', '9', '10', '11'
//           '12', '13', '14', '15'];

// the game revolves around players swapping the numbered tiles with the 'e' tile, or 'sliding' them into the empty space, in order to reach this win condition

// the limitation of this game is that the only tiles that are allowed to 'slide' into the empty tile, are those directly adjacent to the empty tile
// for example: when 'E' is at spot '3', only tiles '2' and '7' are allowed to move

// We can calculate these allowable tiles with code that keeps track of our 'E' tile's current index on the board

// Since our E tile can move in only the four cardinal directions (N, S, E, W), these locations on our array might be written respectively as:(indexOf(E)+4, indexOf(E)-4, indexOf(E)+1, indexOf(E)-1)

// Thus, if indexOf(E) was currently at index 15(the bottom right corner), indexes 15+4 and 15+1 wouldn't exist, leaving only indexes 15-4 and 15-1 as the available moves.

// with this, we might have a data structure that can be built with these conditions:

// 1: an array of our win conditions

// 2: an array of our tile objects with properties to keep track of key and current index 
//(i.e. {key: 1, value: 3, clickable: true/false})

// 3: an array of current board state

// -----------------------

// initialize data of tiles array with properties of {value: i, clickable: false}, where i is range from 0-15

// onComponentDidMount
    // set this.empty = Math.random(0-15);
    // determineClickable
    // handleShuffle
    // start game

// determine win condition:
    // for(let i = 0; i < titles.length; i++){
    //     if(tiles.value !== i){ 
    //       return false
    //     } else {
    //       return true
    //     };
    // };

// determine clickable
    //* first check if win == true || if false, run code below *//
    // make copy of state.tiles
    // using a for-loop, determine if element in array is clickable or not
    // set state to new array with changed clickable properites
    // determine location of empty tile
        // let empty = this.state.empty;
    // write condition for click in relation to empty's location
        // if(this.value == empty - 1 || this.value == empty + 1 || this.value == empty + 4 || this.value == empty - 4) {
        //     this.clickable = !this.clickable
        // }

// render tiles
    // send to Tile Component

// onClick, swap target with empty
    //set copies of state.empty and state.tiles
    //swap elements of arr using clicked div id and empty (aka empty tile's current index location);
    //checkWin
    //determineClickable

// shuffleMe
    // for 100~ moves
        // filter state.tiles by clickable={true}
        // push to array
        // choose random index and run onClick with target div;
        



