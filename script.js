let container = document.getElementById("grid");
let reset = document.getElementById("reset")

//creates grid
for (i=0; i<16; i++){
    let row = document.createElement("div");
    row.className = "row"
    container.appendChild(row)
    for (j = 0; j < 16; j++){
        let cell = document.createElement("div");
        cell.className = "cell";
        row.appendChild(cell);
    }
}
let gridCell = document.querySelectorAll(".cell");
console.log(gridCell);

for (i = 0; i < gridCell.length; i++){
    gridCell[i].addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "gray"
    })
}

reset.addEventListener("click", function(){
    for (i = 0; i < gridCell.length; i++){
        gridCell[i].style.backgroundColor = "white"
        }
    })