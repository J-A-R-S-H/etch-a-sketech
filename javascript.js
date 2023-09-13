const container = document.querySelector('body');

const div = document.createElement('div')
div.classList.add("container")
container.appendChild(div);

for (let i = 0; i < 16 * 16; i++) {
    const squaredDiv = document.createElement('div')
    squaredDiv.classList.add("squaredDiv")
    div.appendChild(squaredDiv);

    squaredDiv.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = colorPicker.value;
    }
    )
}

const colorPicker = document.querySelector('input[type="color"]')
