import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../utils/createStore';
import homeReducer from './home/homeReducer';
import HomeScreen from './home/home';

export default class Content extends Component {
	constructor(props)
{
		super(props); 
		this.store = createStore(homeReducer);        
	}

	render() {
		return <Provider store={this.store}>
                <HomeScreen />
            </Provider>;
	}
} 