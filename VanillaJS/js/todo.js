const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function handlerToDoFormSubmit(event) {
	event.preventDefault();
	const newToDo = todoInput.value;
	todoInput.value = "";	
}

todoForm.addEventListener("submit", handlerToDoFormSubmit);