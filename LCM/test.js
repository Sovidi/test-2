const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");



let todos = [];
const TODOS_KEY = ("todos");



function deleteTodos(event) {
const bttnDelete = event.target.parentElement;
bttnDelete.remove();
todos = todos.filter((item) => item.id !== parseInt(bttnDelete.id));
saveTodo();
};

function saveTodo() {
localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};



function paintTodo(wroteNameObj) {
    const li = document.createElement("li");
    li.id = wroteNameObj.id
    const span = document.createElement("span");
    span.innerText = wroteNameObj.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteTodos);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
};



function todoSubmit(event) {
event.preventDefault();
const wroteName = todoInput.value;
const wroteNameObj = {
    text: wroteName,
    id: Date.now(),
};
paintTodo(wroteNameObj);
todos.push(wroteNameObj);
};



todoForm.addEventListener("submit", todoSubmit);

const parsedTodos = JSON.parse(localStorage.getItem("todos"));
if(parsedTodos !== null) {
    parsedTodos.forEach((item) => paintTodo);
    todos = parsedTodos;
};