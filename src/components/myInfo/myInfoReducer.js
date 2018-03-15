import { 
	REFRESH_TIME,
	SET_GREETINGS
} from '../../constants/ActionTypes';


const initialState = {
	localTime: '',
	ISTTime: '',
	greetings: ''
};

export default function MyInfoReducer(state = initialState, action) {
	switch (action.type) {
	case REFRESH_TIME: 

		return { 
			...state, 
			localTime: action.localTime,
			ISTTime: action.ISTTime
		};

	case SET_GREETINGS: 
		return { 
			...state, 
			greetings: action.greetings
		};

	default: {
		return state;
	}        
	}
}