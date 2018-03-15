import { 
	LOGIN_CHECK
} from '../../constants/ActionTypes';


const initialState = {
	loggedIn: false
};

export default function MyInfoReducer(state = initialState, action) {
	switch (action.type) {
	case LOGIN_CHECK: 
		return { 
			...state,
			loggedIn: action.loggedIn,
			data: action.loggedIn? action.data.res : {}
		};
	default: {
		return state;
	}        
	}
}