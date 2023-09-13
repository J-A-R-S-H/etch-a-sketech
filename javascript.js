const container = document.querySelector('body');
const colorPicker = document.querySelector('input[type="color"]')

const div = document.createElement('div')
div.classList.add("container")
container.appendChild(div);


function grid(rows, cols) {

    div.innerText = ""
    div.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    div.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const squaredDiv = document.createElement('div')
        squaredDiv.classList.add("squaredDiv")
        div.appendChild(squaredDiv);

        squaredDiv.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = colorPicker.value;
        }
        )


    }
}

document.addEventListener("DOMContentLoaded", function () {
    grid(16, 16);
});

let gridSizeButton = document.querySelector(".gridButton");
gridSizeButton.addEventListener("click", function () {
    let size = prompt("Select your Grid Size")
    if (size > 100 || size < 0) {
        alert("You had too many grids. Try not to exceed a number over 100 or input a value less than 0")
    }
    else
        grid(size, size)
})