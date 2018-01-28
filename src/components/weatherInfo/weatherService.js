import appConfig from '../../config/appConfig';

export function getWeatherDetails() {
    const { url, savi } = appConfig.weatherInfo;
    const { weatherId, name, countryCode } = appConfig.cityDetails.SYD;
    const fetchedData = window.fetch(`${url}?q=${name},${countryCode}&appid=${savi}&mode=json`)
                              .then((response) => {
                                 return response.json();
                                })
                                .then((data) => {
                                    console.log(data.list[0].weather[0].description);
                                });


}