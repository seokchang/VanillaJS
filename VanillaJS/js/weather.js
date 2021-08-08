const API_KEY = "1a5f6272638c49ee63632b45b7828a25";

function onGeoSuccessCallBack(position) {
	// 위도
	const latitude = position.coords.latitude;
	// 경도
	const longitude = position.coords.longitude;
	const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
	fetch(weatherURL)
		.then(response => response.json())
		.then(data => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");

			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}

function onGeoErrorCallBack() {
	alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccessCallBack, onGeoErrorCallBack);