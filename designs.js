// Declaring and storing the elements in variables

let grid = document.getElementById("pixelCanvas");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");


// On submit - clear the grid and create the new grid

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};


// Creating the grid by row and adding cells for each row.
// Similar to the quiz, Nested Numbers (6-10)

function makeGrid() {
    for (let r = 0; r < gridHeight.value; r++){
        const row = grid.insertRow(r);
        for (let c = 0; c < gridWidth.value; c++){
            const cell = row.insertCell(c);
            //Adding an event listener on the cell
            cell.addEventListener("click", function(event) {
                cell.style.backgroundColor = colorPicker.value;
            });
        }
    }
}


//Clearing the grid (runs before we make the grid)

function clearGrid(){
    while (grid.firstChild){
         grid.removeChild(grid.firstChild);
    }
}