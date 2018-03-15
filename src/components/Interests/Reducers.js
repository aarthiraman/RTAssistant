import { 
	INTERESTS_SUBMIT
} from '../../constants/ActionTypes';

const initialState = {
	selected : {},
	done: false
};

export default function Reducer(state = initialState, action) {
	switch (action.type) {
	case INTERESTS_SUBMIT : {
		return {
			...state,
			done: true
		};
	}
    
	default:
		return state;
	}
}