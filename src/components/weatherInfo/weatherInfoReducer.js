import { 
WEATHER_SET
} from '../../constants/ActionTypes';


const initialState = {
	temp: '',
	date: '',
	day: '',
	advice : '',
	iconClass: ''
};

export default function MyInfoReducer(state = initialState, action) {
	switch (action.type) {
	case WEATHER_SET: 
		return { 
			...state,
			temp: action.temp,
			date: action.data,
			day: action.day,
			advice : action.advice,
			iconClass: action.iconClass
		};
	default: {
		return state;
	}        
	}
}