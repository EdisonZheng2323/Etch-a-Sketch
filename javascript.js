let initialGridSize = 16;
let container = document.querySelector(".container");
function createGrid(gridSize){
  for(let i = 0; i < gridSize * gridSize; i++){
    let square = document.createElement("div");
    let squareWidth = 800/gridSize + "px";
    let squareHeight = 800/gridSize + "px";
    square.style.width = squareWidth;
    square.style.height = squareHeight;
    square.style.borderStyle = 'solid';
    square.style.borderColor = 'gray';

    square.addEventListener('mouseover', function() {
      square.style.backgroundColor = getRandomColor();
    })
    container.appendChild(square);
  }
}
function getRandomColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
let reset = document.querySelector("#reset");
reset.addEventListener('click', function() {
  let resize = Number(prompt("How many number of square per side of the grid do you want? (Put a number between 1 and 100)"));
  while(resize > 100 || resize < 1 || isNaN(resize) || !Number.isInteger(resize)){
    resize = Number(prompt("How many number of square per side of the grid do you want? (Put a number between 1 and 100)"));
  }
  container.innerHTML = '';
  createGrid(resize);
})
createGrid(initialGridSize);
