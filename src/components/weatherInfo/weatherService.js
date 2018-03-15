import appConfig from '../../config/appConfig';

export function getWeatherDetails() {
	const { url, savi } = appConfig.weatherInfo;
	const { weatherId, name, countryCode } = appConfig.cityDetails.SYD;
	return window.fetch(`${url}?q=${name},${countryCode}&appid=${savi}&mode=json`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const { icon } = data.list[0].weather[0];
			const { temp } = data.list[0].main;
			console.log(data);
			return {
				iconClass : icon,
				temp: (Math.round(temp) - 273 )
			};
		});


}