const loginForm = document.querySelector("#form-login");
const loginInput = document.querySelector("#form-login>input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";
const localStorageUserName = localStorage.getItem(USERNAME_KEY);

init();

function init() {
	if (localStorageUserName === null) {
		loginForm.classList.remove(HIDDEN_CLASSNAME);
		loginForm.addEventListener("submit", onSubmitBtnClick);
	} else {
		paintGreetings(localStorageUserName);
	}
}

function paintGreetings(username) {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerHTML = `Hello ${username}`;
}

function onSubmitBtnClick(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}