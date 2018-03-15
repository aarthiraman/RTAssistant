import format from 'date-fns/format';
import add_hours from 'date-fns/add_hours';
import { REFRESH_TIME, SET_GREETINGS } from '../../constants/ActionTypes';
import { getStorage, setStorage } from '../../utils/localStorage';

export function getGreetings() {
	const currentHour = new Date().getHours();

	if(currentHour < 11) {
		return 'Good Morning';
	} else if(currentHour < 15) {
		return 'Good afternoon';
	} else if(currentHour < 19) {
		return 'Good Evening';
	} 

	return 'Good Night';
}

export function setTime() {    
	return (dispatch, getState) => {
		const localTime = format(
			new Date(),
			'h:mm A'
		);

		const ISTTime = format(
			add_hours(new Date(), -5.5),
			'h:mm A'
		);

		dispatch({
			type: REFRESH_TIME,
			localTime,
			ISTTime
		});
	};
}


export function setGreetings() {
	return (dispatch, getState) => {
		setStorage('name', 'Aarthi');   

		dispatch({
			type: SET_GREETINGS,
			greetings: getGreetings()
		});
	};
}