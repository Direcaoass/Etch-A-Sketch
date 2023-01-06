const container = document.querySelector('.container');
const button = document.querySelector('#btn');


function createSquares(squaresQty) {
    for (let i = 1; i <= (squaresQty ** 2); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);
    }
}


function changeSize() {
    const newSize = parseInt(prompt('Type a number of squares per line (max 32)'));
    if (newSize <= 0 || newSize > 32 || !newSize) {
        alert('Type a number between 1 and 32')
        return changeSize();
    }
    container.innerText = '';
    container.style.setProperty('grid-template-columns', `repeat(${newSize}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${newSize}, 1fr)`);
    createSquares(newSize);

}

function createRGB() {
    const randColor = Math.floor(Math.random() * 255);
    return randColor
}


createSquares(16);

button.addEventListener('click', () => {
    changeSize()
})


container.addEventListener('mouseover', (e) => {

    const element = e.target;
    
    if (element.classList.contains('square'))
        element.style.setProperty('background-color', `rgb(${createRGB()},${createRGB()},${createRGB()})`)
    
})
