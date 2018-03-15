import { 
	RECOMMENDATIONS_CHANGE,
	RECOMMENDATIONS_SUBMIT
} from '../../constants/ActionTypes';

export function onRecommendationsSelect(selectedItem) {
	return (dispatch, getState) => {
		const { recommendations : { list } } = getState();
		
		let updatedList = list.map(a => {
			var returnValue = {...a};
			
			if (a.text == selectedItem) {
				returnValue.selected = !returnValue.selected;
			}

			return returnValue;
		});
		
		
		dispatch({
			type: RECOMMENDATIONS_CHANGE,
			list: updatedList
		});
	};
}

export function onRecommendationsSubmit() {
	return (dispatch) => {		
		dispatch({
			type: RECOMMENDATIONS_SUBMIT
		});
	};
}