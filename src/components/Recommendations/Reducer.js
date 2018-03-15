import { 
	RECOMMENDATIONS_POPULATE,
	RECOMMENDATIONS_CHANGE,
	RECOMMENDATIONS_SUBMIT,
	RECOMMENDATIONS_RESET
} from '../../constants/ActionTypes';

import data from './RecommendationsData';

const initialState = {
	list : data,
	done: false
};

export default function Reducer (state = initialState, action) {
	switch (action.type) {
	case RECOMMENDATIONS_POPULATE : {
		return {
			...state,
			list: initialState.list
		};
	}
	case RECOMMENDATIONS_CHANGE : {
		return {
			...state,
			list: action.list
		};
            
	}
	case RECOMMENDATIONS_SUBMIT : {
		return {
			...state,
			done: true
		};
            
	}
	case RECOMMENDATIONS_RESET : {
		return initialState;
	}
    
	default: {
		return state;
	}
	}
}