const toDos = JSON.parse(localStorage.todos) || [];
const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

function addTodo(event) {
    event.preventDefault();
    const input = form.children[0].value;
    
    const toDo = {
        addToDo: input,
        done: false 
    };

    toDos.push(toDo);
    form.children[0].value = "";

    populateList(toDos);
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function populateList(todos) {
    // debugger;
    ul.innerHTML = todos.map(function(todo,i) {
        return `
        <li>
            <input type="checkbox" data-index=${i} ${todo.done ? "checked" : ""}> 
            <label for="item${i}">${todo.addToDo} </label>
        </li>`;
    }).join("");
}

function handleChecked(event) {
    const itemClicked = event.target;
    if (itemClicked.type !== "checkbox") {
        return;
    }
    debugger;
    // itemClicked.checked = !itemClicked.checked;

// find that todo in the tod array, change it, then we send back to 
    const index = itemClicked.dataset.index

    toDos[index].done = !toDos[index].done;
    localStorage.setItem('todos', JSON.stringify(toDos));

}
populateList(toDos);
form.addEventListener("submit", addTodo);
ul.addEventListener("click", handleChecked);

// itemClicked.checked = true;


