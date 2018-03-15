import { 
	INTERESTS_SUBMIT
} from '../../constants/ActionTypes';

export function onInterestsSubmit() {
	return (dispatch) => {
		dispatch({
			type: INTERESTS_SUBMIT
		});
	};
}