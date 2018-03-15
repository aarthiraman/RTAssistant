import { 
	LOGIN_CHECK,
	LOGIN_GET_DATA
} from '../../constants/ActionTypes';

const { ipcRenderer } = require('electron');

var loginWithFB = function () {
	ipcRenderer.send('fb-authenticate', 'yes');
	ipcRenderer.on('fb-res' , function(event , data){ 
		console.log(data); 
	});
};


export function checkLogin() {
	return (dispatch) => {
		ipcRenderer.send('fb-authenticate', 'yes');

		dispatch({
			type: LOGIN_CHECK,
			loggedIn: false,
		});

		ipcRenderer.on('fb-res' , function(event , data){ 
			console.log('blah');
			console.log(data); 

			dispatch({
				type: LOGIN_CHECK,
				loggedIn: true,
				data
			});
		});

	};
}