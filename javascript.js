let gridSize = 16;
let container = document.querySelector(".container");
function createGrid(gridSize){
  for(let i = 0; i < gridSize * gridSize; i++){
    let square = document.createElement("div");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let squareWidth = width/gridSize + "px";
    let squareHeight = height/gridSize + "px";
    square.style.width = squareWidth;
    square.style.height = squareHeight;
    square.addEventListener('mouseover', function() {
      square.classList.add('hovered');
    })
    container.appendChild(square);
  }
}
let reset = document.querySelector("#reset");
reset.addEventListener('click', function() {
  let resize = prompt("How many number of square per side of the grid do you want? (Put a number between 1 and 100)");
  while(+resize > 100 || +resize < 1){
    resize = prompt("How many number of square per side of the grid do you want? (Put a number between 1 and 100)");
  }
  resize = +resize;
  container.innerHTML = '';
  createGrid(resize);

})
createGrid(gridSize);
