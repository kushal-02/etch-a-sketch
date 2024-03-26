const grid = document.querySelector('#grid-container');
const clearButton = document.querySelector('.clear');
let toggle = true;

let storeColor = "black";

createGrid(16);
paint("black");


function createGrid(value){
    removeGrid();
    updateGridText(value);
    document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    for(let i=0; i< value; i++){
        for(let j=0; j< value; j++){
            const cell = document.createElement("div");
            cell.classList.add('cell');
            grid.appendChild(cell);
        }
    }
    paint(storeColor);
}

function clearGrid(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
    console.log("cleard....")
}

function removeGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        grid.removeChild(cell);
    });
}

function updateGridText(value){
    document.querySelector(".grid-size").textContent = `${value} X ${value}`;
}

clearButton.addEventListener("click", clearGrid);

let down = false;

function paint(color){
    const gridCells = document.querySelectorAll(".cell");

    gridCells.forEach(cell => {
        cell.addEventListener("mousedown", () => {
            cell.style.backgroundColor = `${color}`;
            down = true;
        });

        cell.addEventListener("mouseover", () => {
            if(down){
                cell.style.backgroundColor = `${color}`;
            }
        })
    })

    window.addEventListener("mouseup", () => {
        down = false;
    })

    storeColor = color;
}


function toggleGrid(){
    const gridCells = document.querySelectorAll(".cell");

    if(toggle){
        gridCells.forEach(cell => {
            cell.style.border = 'none';
            toggle = false;
        });
    }else{
        gridCells.forEach(cell => {
            cell.style.border = '1px solid rgb(216,215,215)';
            toggle=true;
        });
    }
}

