const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");


let todos = [];

function deleteTodos(event) {
const bttnDelete = event.target.parentElement;
todos.filter(item => item.id !== bttnDelete.id);
bttnDelete.remove();
saveTodo();
};

function saveTodo() {
localStorage.setItem("todos", JSON.stringify(todos));
};

function paintTodo(wrotenameObj) {
    const li = document.createElement("li");
    li.id = wrotenameObg.id
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteTodos);
};

function todoSubmit(event) {
event.preventDefault();
const wroteName = todoInput.value;
const wroteNameObj = {
    text: "todos",
    id: Date.now(),
};
paintTodo(wroteNameObj);
todos.push(wroteNameObj)
};

todoForm.addEventListener("submit", paintTodo);

const parsedTodos = JSON.parse(localStorage.getItem("todos"));
if(parsedTodos !== null) {
    parsedTodos.forEach((item) => paintTodo);
    todos = parsedTodos;
};

const hours = new Date().getHours();
const ul = document.createElement("li");

text.appendChild(ul);

console.log(hours);