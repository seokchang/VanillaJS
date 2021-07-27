const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	// String() : Parse String Type
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// Interval : 지정 시간 마다 수행 (1000 = 1 seconds)
setInterval(getClock, 1000);

// Timeout : 지정 시간 후 실행