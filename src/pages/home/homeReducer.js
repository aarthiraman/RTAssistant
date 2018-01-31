import { combineReducers } from 'redux';
import i18nReducer from '../../i18n/i18nReducer';
import MyInfoReducer from '../../components/myInfo/myInfoReducer';
import WeatherReducer from '../../components/weatherInfo/weatherInfoReducer';

export default combineReducers({
	i18n: i18nReducer,
	info: MyInfoReducer,
	weather: WeatherReducer
});