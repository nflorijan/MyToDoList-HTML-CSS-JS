const addButton = document.getElementById('add-item-button');
const addItemInput = document.getElementById('add-item-text');
const itemList = document.getElementById('item-list');
let deleteButtons = document.querySelectorAll('.list-item-button')

function asignEventListeners() {
    deleteButtons.forEach(button => button.addEventListener('click', halndeItemClickButton));
}

function getInputValue() {
   return addItemInput.value;
}

function createNewListItem(text) {
    const newListItem = `
        <li class="add-item-list-item">
            <span class="list-item-text">${text}</span>
            <a href="#" class="list-item-button">&#10006;</a>
        </li>
    `;
    return newListItem;
}

addButton.addEventListener('click', function() {
    const inputValue = getInputValue();
    if (inputValue === "") {
        alert("Please enter a value in the input field!!!");
    } 
    else {
        const newListItem = createNewListItem(inputValue);
        itemList.innerHTML += newListItem;
        deleteButtons = document.querySelectorAll('.list-item-button')
        asignEventListeners();
    }
});

function halndeItemClickButton(event) {
    const button = event.currentTarget;
    const item = button.closest('.add-item-list-item');
    item.remove();
}

asignEventListeners();
