const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "toDos";

const localStorageTodo = localStorage.getItem(TODOS_KEY);

if (localStorageTodo !== null) {
	const parseToDos = JSON.parse(localStorageTodo);
	toDos = parseToDos;
	// '=>' : arrow function(ECMAScript6/EC6)
	parseToDos.forEach(paintToDo);
}

function paintToDo(newToDoObj) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");

	li.id = newToDoObj.id;
	span.innerText = newToDoObj.text;
	button.innerText = "❌";
	button.addEventListener("click", onRemoveToDo);
	todoList.appendChild(li);
	li.appendChild(span);
	li.appendChild(button);
}

function onRemoveToDo(event) {
	const li = event.target.parentNode;
	toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
	li.remove();
	onSaveToDo();
}

function onSaveToDo() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handlerToDoFormSubmit(event) {
	event.preventDefault();
	const newToDo = todoInput.value;
	todoInput.value = "";

	const newToDoObj = {
		id: Date.now(),
		text: newToDo,
	}

	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	onSaveToDo();
}

todoForm.addEventListener("submit", handlerToDoFormSubmit);