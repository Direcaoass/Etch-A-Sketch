const container = document.querySelector('.grid-container');
const sizeButton = document.querySelector('#new-size');
const rainbowOption = document.querySelector('#rainbow-color');
const unicOption = document.querySelector('#unic-color');
const colorPicked = document.querySelector('#pick-color');
const clearButton = document.querySelector('#clear');
const darkenOption = document.querySelector('#darken-mode');
let penStatus = false;


function createSquares(squaresQty) {
    for (let i = 1; i <= (squaresQty ** 2); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);
        squareDiv.style.backgroundColor = 'rgb(255,255,255)';
    }
}


function changeGridSize() {
    const newSize = sizeButton.value;
    container.innerText = '';
    container.style.setProperty('grid-template-columns', `repeat(${newSize}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${newSize}, 1fr)`);
    createSquares(newSize);
}

function createRandonRGB() {
    const randColor1 = Math.floor(Math.random() * 255);
    const randColor2 = Math.floor(Math.random() * 255);
    const randColor3 = Math.floor(Math.random() * 255);
    return (`${randColor1},${randColor2},${randColor3}`)
}

function startPaint() {

    container.addEventListener('mouseover', (e) => {
        const item = e.target;
        if (rainbowOption.checked && item.classList.contains('square') && penStatus)
            item.style.backgroundColor = `rgb(${createRandonRGB()})`;
        else if (unicOption.checked && item.classList.contains('square') && penStatus)
            item.style.backgroundColor = `${colorPicked.value}`;
        else if (darkenOption.checked && item.classList.contains('square') && penStatus)
            item.style.backgroundColor = `rgb(${darken(item.style.backgroundColor)})`;
    })
}


function darken(rgbColor) {
    let SeparatedColor = rgbColor.slice(4, -1).split(',')
    let redColor = SeparatedColor[0];
    let greenColor = SeparatedColor[1];
    let blueColor = SeparatedColor[2];

    let newRed = parseInt(redColor * .9);
    let newGreen = parseInt(greenColor * .9);
    let newBlue = parseInt(blueColor * .9);

    return (`${newRed},${newGreen},${newBlue}`)

}


//EVENTS
createSquares(36);

container.addEventListener('click', () => {
    penStatus = !penStatus;
    startPaint();
})

sizeButton.addEventListener('change', () => {
    changeGridSize()
})


clearButton.addEventListener('click', () => {
    changeGridSize();
})