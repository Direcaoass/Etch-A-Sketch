const container = document.querySelector('.grid-container');
const sizeButton = document.querySelector('#new-size');
const rainbowOption = document.querySelector('#rainbow-color');
const unicOption = document.querySelector('#unic-color');
const colorPicked = document.querySelector('#pick-color');
const clearButton = document.querySelector('#clear')
let penStatus = false;

function createSquares(squaresQty) {
    for (let i = 1; i <= (squaresQty ** 2); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);
    }
}


function changeSize() {
    const newSize = sizeButton.value;
    container.innerText = '';
    container.style.setProperty('grid-template-columns', `repeat(${newSize}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${newSize}, 1fr)`);
    createSquares(newSize);
    console.log(newSize);

}

function createRandonRGB(factor) {
    const randColor1 = factor * Math.floor(Math.random() * 255);
    const randColor2 = factor * Math.floor(Math.random() * 255);
    const randColor3 = factor * Math.floor(Math.random() * 255);
    return `${randColor1},${randColor2},${randColor3}`
}

function startPaint() {

    container.addEventListener('mouseover', (e) => {
        const item = e.target;
        if (rainbowOption.checked && item.classList.contains('square') && penStatus)
            item.style.setProperty('background-color', `rgb(${(createRandonRGB(1))})`);
        else if (unicOption.checked && item.classList.contains('square') && penStatus)
            item.style.backgroundColor = `${colorPicked.value}`;
    })
}


//EVENTS
createSquares(36);

container.addEventListener('click', () => {
    penStatus = !penStatus;
    startPaint();
})

sizeButton.addEventListener('change', () => {
    changeSize()
})


clearButton.addEventListener('click', () => {
    changeSize();
})