import { combineReducers } from 'redux';
import i18nReducer from '../../i18n/i18nReducer';
import MyInfoReducer from '../../components/myInfo/myInfoReducer';
import LoginReducer from '../../components/Login/Reducer';
import RecommendationsReducer from '../../components/Recommendations/Reducer';
import InterestsReducer from '../../components/Interests/Reducers';

export default combineReducers({
	i18n: i18nReducer,
	info: MyInfoReducer,
	login: LoginReducer,
	recommendations: RecommendationsReducer,
	interests: InterestsReducer
});