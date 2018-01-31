import { 
WEATHER_SET
} from '../../constants/ActionTypes';
import { getWeatherDetails } from '../weatherInfo/weatherService';

export function setWeather() {
	return (dispatch, getState) => {

		getWeatherDetails().then((data) => {
			dispatch({
				type: WEATHER_SET,
				...data
			});
		});

	};
}