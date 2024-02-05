let btn=document.querySelector("#button");
let cityName=document.querySelector("#cityName");



const weather = async(city) => {
	cityName.innerHTML = city;

	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '36b9ea290amshbbe01619c2fa1b8p19f547jsn3a1fecfff66f',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		temp.innerHTML = result.temp;
		actual.innerHTML = result.feels_like;
		minTemp.innerHTML = result.min_temp;
		// maxTemp.innerHTML = result.max_temp;
		humidity.innerHTML = result.humidity;
		cloudPct.innerHTML = result.cloud_pct;
		sunrise.innerHTML = result.sunrise;
		sunset.innerHTML = result.sunset;
		wind.innerHTML = result.wind_speed;
		windDegree.innerHTML = result.wind_degrees;
	} catch (error) {
		console.error(error);
	}
}

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	weather(city.value);
})
