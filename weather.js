const key = 'c2a6967711c62191e8d3b282b83b0808';
var city = 'Atlanta';
var theData = '';
const dayEl = document.querySelector('.date');
const weatherEl = document.querySelector('.daypic1');
const conditionsEl = document.querySelector('.conditions');
const daysEl = document.querySelector('.day2');
const cityEl = document.querySelector('.cityName');
const searchText = document.getElementById('search');
const pressOn = document.querySelector('.btn');
const sunUp = document.querySelector('.sunrise');
const humidEl = document.querySelector('.humidity');
const speedEl = document.querySelector('.speed');
var recent = document.querySelector('.Recent');

var cities = [];

const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;

fetch(requestUrl)
	.then((response) => response.json())
	.then((data) => {
		// var theData = data;

		const milli = data.dt;
		const day = new Date(milli * 1000).toDateString();
		const humid = data.main.humidity;
		const speed = data.wind['speed'] + ' ' + 'mph';
		const cityNm = JSON.stringify(data.name).replaceAll('"', '');
		const iconId = data.weather[0].icon;
		const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
		const descript = data.weather[0].description;
		sunUp.textContent = 'Details: ' + descript;
		dayEl.textContent = day;
		speedEl.textContent = 'Wind Speed: ' + speed;
		cityEl.textContent = cityNm;
		humidEl.textContent = 'Humidity:' + ' ' + humid;
		weatherEl.innerHTML = `<img src=${icon} />`;
		conditionsEl.textContent =
			'Temp: ' + JSON.stringify(Math.ceil(data.main.feels_like)) + '°F';
	});

console.log(requestUrl);

pressOn.addEventListener('click', (e) => {
	var recent = document.querySelector('.Recent');
	city = searchText.value;
	//Getting value of search and storing it
	var store = (city) => {
		cities.push(city);
		cities.map((i) => localStorage.setItem('City', JSON.stringify(cities)));

		if (cities.length !== 4) {
			const recentBtn = document.createElement('button');
			recentBtn.setAttribute('class', 'button2');

			var node = document.createTextNode([city]);
			recentBtn.appendChild(node);
			recent.appendChild(recentBtn);
		} else {
			console.log('Hey thats alot to store buddy!');
		}
	};
	store(city);

	const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`;

	fetch(requestUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.city.name);
			// var theData = data;
			// const sunR = new Date(data.city.sunrise * 1000).toLocaleTimeString();
			const humid = data.list[0].main.humidity;
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
				data.city.name,
				data.list[0].wind['speed'],
				data.list[7].wind['speed'],
				data.list[15].wind['speed'],
				data.list[23].wind['speed'],
				data.list[31].wind['speed'],
				data.list[0].weather[0].icon,
				data.list[7].weather[0].icon,
				data.list[15].weather[0].icon,
				data.list[23].weather[0].icon,
				data.list[31].weather[0].icon,
				data.list[0].main.humidity,
				data.list[7].main.humidity,
				data.list[15].main.humidity,
				data.list[23].main.humidity,
				data.list[31].main.humidity,
				data.list[0].weather[0].description,
				data.list[7].weather[0].description,
				data.list[15].weather[0].description,
				data.list[23].weather[0].description,
				data.list[31].weather[0].description,
				data.list[39].main['temp'],
				data.list[39].dt,
				data.list[39].wind['speed'],
				data.list[39].weather[0].icon,
				data.list[39].main.humidity,
				data.list[39].weather[0].description,
			];

			newArr.map((i) => {
				// let newData = i;
				//Declaring variables of all elements for conditions
				const newCardOne = document.querySelector('.conditions');
				const newCard = document.querySelector('.conditions2');
				const newCard2 = document.querySelector('.conditions3');
				const newCard3 = document.querySelector('.conditions4');
				const newCard4 = document.querySelector('.conditions5');
				const newCard5 = document.querySelector('.conditions6');
				//Declaring variables for all date elements forecast
				const newDateOne = document.querySelector('.date');
				const newDate = document.querySelector('.date2');
				const newDate2 = document.querySelector('.date3');
				const newDate3 = document.querySelector('.date4');
				const newDate4 = document.querySelector('.date5');
				const newDate5 = document.querySelector('.date6');
				//Declaring variables for names of cities
				const cityElOne = document.querySelector('.cityName');
				const cityEl1 = document.querySelector('.cityName2');
				const cityEl2 = document.querySelector('.cityName3');
				const cityEl3 = document.querySelector('.cityName4');
				const cityEl4 = document.querySelector('.cityName5');
				const cityEl5 = document.querySelector('.cityName6');
				//Updating forecast cards city names
				cityElOne.textContent = newArr[10];
				cityEl1.textContent = newArr[10];
				cityEl2.textContent = newArr[10];
				cityEl3.textContent = newArr[10];
				cityEl4.textContent = newArr[10];
				cityEl5.textContent = newArr[10];
				//Grabbing windspeed elements, setting them to variables
				const windElOne = document.querySelector('.speed');
				const windEl1 = document.querySelector('.speed2');
				const windEl2 = document.querySelector('.speed3');
				const windEl3 = document.querySelector('.speed4');
				const windEl4 = document.querySelector('.speed5');
				const windEl5 = document.querySelector('.speed6');
				//Updating speed element for each card
				windElOne.textContent = 'Wind Speed: ' + newArr[11] + 'mph';
				windEl1.textContent = 'Wind Speed: ' + newArr[12] + 'mph';
				windEl2.textContent = 'Wind Speed: ' + newArr[13] + 'mph';
				windEl3.textContent = 'Wind Speed: ' + newArr[14] + 'mph';
				windEl4.textContent = 'Wind Speed: ' + newArr[15] + 'mph';
				windEl5.textContent = 'Wind Speed: ' + newArr[33] + 'mph';
				//Declaring variables for forecast icons
				const iconElOne = document.querySelector('.daypic1');
				const iconEl1 = document.querySelector('.daypic2');
				const iconEl2 = document.querySelector('.daypic3');
				const iconEl3 = document.querySelector('.daypic4');
				const iconEl4 = document.querySelector('.daypic5');
				const iconEl5 = document.querySelector('.daypic6');
				//Setting variable icons to forecast cards
				var iconOne = newArr[16];
				var icon1 = newArr[17];
				var icon2 = newArr[18];
				var icon3 = newArr[19];
				var icon4 = newArr[20];
				var icon5 = newArr[34];

				const iconpicOne = `https://openweathermap.org/img/wn/${iconOne}@2x.png`;
				const iconpic1 = `https://openweathermap.org/img/wn/${icon1}@2x.png`;
				const iconpic2 = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
				const iconpic3 = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
				const iconpic4 = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
				const iconpic5 = `https://openweathermap.org/img/wn/${icon5}@2x.png`;

				iconElOne.innerHTML = `<img src=${iconpicOne} />`;
				iconEl1.innerHTML = `<img src=${iconpic1} />`;
				iconEl2.innerHTML = `<img src=${iconpic2} />`;
				iconEl3.innerHTML = `<img src=${iconpic3} />`;
				iconEl4.innerHTML = `<img src=${iconpic4} />`;
				iconEl5.innerHTML = `<img src=${iconpic5} />`;
				//Setting variables for humidity forecast cards
				const humidElOne = document.querySelector('.humidity');
				const humidEl1 = document.querySelector('.humidity2');
				const humidEl2 = document.querySelector('.humidity3');
				const humidEl3 = document.querySelector('.humidity4');
				const humidEl4 = document.querySelector('.humidity5');
				const humidEl5 = document.querySelector('.humidity6');
				//Setting forecast cards to new humidity
				humidElOne.textContent = 'Humidity: ' + newArr[21];
				humidEl1.textContent = 'Humidity: ' + newArr[22];
				humidEl2.textContent = 'Humidity: ' + newArr[23];
				humidEl3.textContent = 'Humidity: ' + newArr[24];
				humidEl4.textContent = 'Humidity: ' + newArr[25];
				humidEl5.textContent = 'Humidity: ' + newArr[35];

				//Updating cards for five day forecast
				var milliOne = newArr[5] * 1000;
				var milli = newArr[6] * 1000;
				var milli2 = newArr[7] * 1000;
				var milli3 = newArr[8] * 1000;
				var milli4 = newArr[9] * 1000;
				var milli5 = newArr[32] * 1000;
				//Converting Unix into date object
				const dateObjOne = new Date(milliOne).toDateString();
				const dateObj = new Date(milli).toDateString();
				const dateObj2 = new Date(milli2).toDateString();
				const dateObj3 = new Date(milli3).toDateString();
				const dateObj4 = new Date(milli4).toDateString();
				const dateObj5 = new Date(milli5).toDateString();

				newDateOne.textContent = 'Date: ' + dateObjOne;
				newDate.textContent = 'Date: ' + dateObj;
				newDate2.textContent = 'Date: ' + dateObj2;
				newDate3.textContent = 'Date: ' + dateObj3;
				newDate4.textContent = 'Date: ' + dateObj4;
				newDate5.textContent = 'Date: ' + dateObj5;
				//Updating text within each div element for conditions
				newCardOne.textContent = 'Temp:' + ' ' + Math.ceil(newArr[0]) + '°F';
				newCard.textContent = 'Temp:' + ' ' + Math.ceil(newArr[1]) + '°F';
				newCard2.textContent = 'Temp:' + ' ' + Math.ceil(newArr[2]) + '°F';
				newCard3.textContent = 'Temp:' + ' ' + Math.ceil(newArr[3]) + '°F';
				newCard4.textContent = 'Temp:' + ' ' + Math.ceil(newArr[4]) + '°F';
				newCard5.textContent = 'Temp:' + ' ' + Math.ceil(newArr[31]) + '°F';
				//Declaring variables for description elements
				const dElOne = document.querySelector('.sunrise');
				const dEl1 = document.querySelector('.sunrise2');
				const dEl2 = document.querySelector('.sunrise3');
				const dEl3 = document.querySelector('.sunrise4');
				const dEl4 = document.querySelector('.sunrise5');
				const dEl5 = document.querySelector('.sunrise6');
				//Setting variable to array data for forecast/descriptions
				dElOne.textContent = 'Details: ' + newArr[26];
				dEl1.textContent = 'Details: ' + newArr[27];
				dEl2.textContent = 'Details: ' + newArr[28];
				dEl3.textContent = 'Details: ' + newArr[29];
				dEl4.textContent = 'Details: ' + newArr[30];
				dEl5.textContent = 'Details: ' + newArr[36];

				// conditionsEl.textContent = newCard;
				// conditionsEl.textContent = i;
				console.log(data.list[0].weather[0].description);
			});
			city = searchText.value = '';
			// const speed = data.wind['speed'];
			// const cityNm = JSON.stringify(data.name).replaceAll('"', '');
			// const iconId = JSON.stringify(data.weather[0]['icon']).replaceAll('"', '');
			// const icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

			// humidEl.textContent = 'Humidity: ' + humid;
			// sunUp.textContent = sunR;
			// speedEl.textContent = speed;
			// cityEl.textContent = cityNm;
			// weatherEl.innerHTML = `<img src=${JSON.stringify(icon)}/>`;
			// conditionsEl.textContent +=
			// 	'Temp: ' + JSON.stringify(data.main.feels_like) + '°F';
		});
});

function clearIt() {
	//Setting attribute to hidden in order to clear div
	//Also clearing storage for new keys to be accepted
	var clearBtn = document.querySelector('.button2');
	console.log('hey');
	clearBtn.setAttribute('class', 'hidden');
	localStorage.clear();
}
