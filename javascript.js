const container = document.querySelector('body');

const div = document.createElement('div')
div.classList.add("container")
container.appendChild(div);

for (let i = 0; i < 16 * 16; i++) {
    const squaredDiv = document.createElement('div')
    squaredDiv.classList.add("squareDiv")
    div.appendChild(squaredDiv);
}