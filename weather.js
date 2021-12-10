const key = 'c2a6967711c62191e8d3b282b83b0808';
var city = 'detroit';
var theData = '';
const weatherEl = document.querySelector('.day1');
const conditionsEl = document.querySelector('.conditions');
const daysEl = document.querySelector('.day2');
const cityEl = document.querySelector('.cityName');
const searchText = document.getElementById('search');
const pressOn = document.querySelector('.btn');
const sunUp = document.querySelector('.sunrise');
const humidEl = document.querySelector('.humidity');
const speedEl = document.querySelector('.speed');
console.log(city);
pressOn.addEventListener('click', (e) => {
	city = searchText.value;

	const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;

	fetch(requestUrl)
		.then((response) => response.json())
		.then((data) => {
			// var theData = data;
			console.log(data);

			const speed = data.wind['speed'];
			const cityNm = JSON.stringify(data.name).replaceAll('"', '');
			const iconId = JSON.stringify(data.weather[0]['icon']).replaceAll(
				'"',
				''
			);
			const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
			const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
			sunUp.textContent = 'Sunrise: ' + sunrise;
			speedEl.textContent = 'Wind Speed: ' + speed;
			cityEl.textContent = cityNm;
			weatherEl.innerHTML = `<img src=${JSON.stringify(icon)}/>`;
			conditionsEl.textContent =
				'Temp: ' + JSON.stringify(data.main.feels_like) + '°F';
		});

	console.log(requestUrl);
});

const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`;

fetch(requestUrl)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		// var theData = data;
		// const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
		// const humidity = data.main.humidity;
		var newArr = [
			// data.city.name,

			data.list[0].main['temp'],
			data.list[7].main['temp'],
			data.list[15].main['temp'],
			data.list[23].main['temp'],
			data.list[31].main['temp'],
			data.list[0].dt,
			data.list[7].dt,
			data.list[15].dt,
			data.list[23].dt,
			data.list[31].dt,
		];

		var degrees = newArr.map((i) => {
			let newData = i;
			//Declaring variables of all elements for conditions
			const newCard = document.querySelector('.conditions');
			const newCard2 = document.querySelector('.conditions2');
			const newCard3 = document.querySelector('.conditions3');
			const newCard4 = document.querySelector('.conditions4');
			const newCard5 = document.querySelector('.conditions5');
			//Declaring variables for all date elements forecast
			const newDate = document.querySelector('.date');
			const newDate2 = document.querySelector('.date2');
			const newDate3 = document.querySelector('.date3');
			const newDate4 = document.querySelector('.date4');
			const newDate5 = document.querySelector('.date5');
			//Updating cards for five day forecast
			var milli = newArr[5] * 1000;
			var milli2 = newArr[6] * 1000;
			var milli3 = newArr[7] * 1000;
			var milli4 = newArr[8] * 1000;
			var milli5 = newArr[9] * 1000;
			//Converting Unix into date object
			const dateObj = new Date(milli).toDateString();
			const dateObj2 = new Date(milli2).toDateString();
			const dateObj3 = new Date(milli3).toDateString();
			const dateObj4 = new Date(milli4).toDateString();
			const dateObj5 = new Date(milli5).toDateString();

			newDate.textContent = dateObj;
			newDate2.textContent = dateObj2;
			newDate3.textContent = dateObj3;
			newDate4.textContent = dateObj4;
			newDate5.textContent = dateObj5;
			//Updating text within each div element for conditions
			newCard.textContent = newArr[0];
			newCard2.textContent = newArr[1];
			newCard3.textContent = newArr[2];
			newCard4.textContent = newArr[3];
			newCard5.textContent = newArr[4];

			// conditionsEl.textContent = newCard;
			// conditionsEl.textContent = i;
			console.log(i);
		});

		// const speed = data.wind['speed'];
		// const cityNm = JSON.stringify(data.name).replaceAll('"', '');
		// const iconId = JSON.stringify(data.weather[0]['icon']).replaceAll('"', '');
		// const icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

		humidEl.textContent = humidEl.textContent + humidity;
		sunUp.textContent = sunUp.textContent + sunrise;
		speedEl.textContent = speedEl.textContent + speed;
		cityEl.textContent = cityNm;
		weatherEl.innerHTML = `<img src=${JSON.stringify(icon)}/>`;
		conditionsEl.textContent +=
			'Temp: ' + JSON.stringify(data.main.feels_like) + '°F';
	});
