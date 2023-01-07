const container = document.querySelector('.container');
const button = document.querySelector('#new-size');


function createSquares(squaresQty) {
    for (let i = 1; i <= (squaresQty ** 2); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);
    }
}


function changeSize() {
    const newSize = button.value;
    container.innerText = '';
    container.style.setProperty('grid-template-columns', `repeat(${newSize}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${newSize}, 1fr)`);
    createSquares(newSize);

}

function createRGB(factor) {
    const randColor1 = factor * Math.floor(Math.random() * 255);
    const randColor2 = factor * Math.floor(Math.random() * 255);
    const randColor3 = factor * Math.floor(Math.random() * 255);
    return `${randColor1},${randColor2},${randColor3}`
}

//EVENTS


createSquares(16);

button.addEventListener('mousemove', () => {
    changeSize()
})


container.addEventListener('mouseover', (e) => {

    const item = e.target;

    if (item.classList.contains('square') && !item.dataset.darken) {

        item.style.setProperty('background-color', `rgb(${(createRGB(1))})`);
        item.dataset.darken = 5;
    }

    else if (item.classList.contains('square') && item.dataset.darken == 5) {

        item.style.setProperty('background-color', `rgb(${(createRGB(0.5))})`);
        item.dataset.darken = 10;
    }

    else if (item.classList.contains('square') && item.dataset.darken == 10) {

        item.style.setProperty('background-color', `rgb(${(createRGB(0))})`);

    }
})



