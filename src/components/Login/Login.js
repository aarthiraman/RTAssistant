import React, { Component } from 'react';
import './login.css';
export default class Login extends Component {
	constructor(props) {
		super(props);        
	}

	componentWillMount() {
		this.props.checkLogin();
	}

	render() {
		const { login, checkLogin } = this.props;
		return <div>
			{login.loggedIn !== true && <button id="fb-button" onClick={() => checkLogin()}>Login</button>}
			{login.loggedIn === true && <div class="logged-in__wrapper">
				<div class="logged-in__icon">{login.data.name.split(' ')[0]}}</div>
				<div class="login-in__container"> 
					<img src={login.data.picture.data.url} />
					<div> Logged in as {login.data.name} </div>
					<button> Log out</button>
				</div>
			</div>}
		</div>;
	}
}
