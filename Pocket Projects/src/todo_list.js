const todos = loadTodos();
const todoList = document.querySelector(".todos");
const todoForm = document.querySelector(".add-todo-form");

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", handleClick);

function addTodo(e) {
    e.preventDefault();

    const input = todoForm.querySelector("input[name=add-todo]");
    const todo = {name: input.value.trim(), done: false};
    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = ""
    populateList(todos);
}

function populateList(todos) {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = todo.name;
        checkbox.checked = todo.done

        const label = document.createElement("label");
        label.htmlFor = todo.name;
        label.textContent = todo.name;

        const todoLi = document.createElement("li");
        todoLi.append(checkbox, label);
        todoList.appendChild(todoLi);
    });
}

function loadTodos() {
    const storedTodosString = localStorage.getItem("todos");
    return storedTodosString ? JSON.parse(storedTodosString) : [];
}

function handleClick(e) {
    if (e.target.type === "checkbox") {
        console.log(todos)
    }
}

populateList(todos)