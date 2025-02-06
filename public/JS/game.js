// Set the number of rows and columns for the grid
const rows = 12;
const cols = 10; // You can change this to whatever size grid you want

// Select the grid container
const gridContainer = document.querySelector('.grid-container');

// Create the grid by generating squares
// for (let i = 0; i < rows * cols; i++) {
//   const square = document.createElement('div');
//   square.classList.add('grid-item');
//   square.textContent = `Square ${i + 1}`; // Optional: Label each square
//   gridContainer.appendChild(square);
// }

for(let i=0; i < rows; i++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('grid-row');
    for(let j=0;j < cols; j++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('grid-item');
        squareElement.textContent = `Row ${i + 1} Column ${j + 1}`;
        rowElement.appendChild(squareElement);
    }
    gridContainer.appendChild(rowElement);
}