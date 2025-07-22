const table = document.getElementById('table')
const addBtn = document.getElementById('add-row')

const color_select = document.getElementById('color-select')
let selectedColor = 'gray';
let isMouseDown = false;

function makeRow() {
    const row = document.createElement('tr');

    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td');
        row.appendChild(td);
    }

    table.appendChild(row);
}

function colorize(event) {
    let target = event.target;

    if (!(target === table)) {
        target.style.backgroundColor = selectedColor;
    }
}

addBtn.addEventListener('click', () => {
    makeRow();
})

color_select.addEventListener('change', (event) => {
    selectedColor = event.target.value;
})

table.addEventListener('click', (event) => {
    colorize(event);
});


document.addEventListener('mousedown', (event) => {
    if(event.button === 0){
        isMouseDown = true;
    }

} )

document.addEventListener('mouseup', (event) => {
    if(event.button === 0){
        isMouseDown = false;
    }
})
table.addEventListener('mouseover', (event) => {
    if(isMouseDown){
        colorize(event);
    }
})
