import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../../utils/createStore';

import './home.css';
import homeReducer from './homeReducer';

import MyInfo from '../../components/myInfo/myInfo';
import WeatherInfo from '../../components/weatherInfo/weatherInfo';

import { getStorage, setStorage } from '../../utils/localStorage';

export default class Content extends Component {
	constructor(props)
    {
        super(props); 
        this.store = createStore(homeReducer);        
	}

    componentWillMount() {
        setStorage('name', 'Aarthi');        
    }

    render() {
        const name = getStorage('name');
        console.log(name);
        return <Provider store={this.store}>
                <div className='app'>
                    <MyInfo name={name}/>
                    <WeatherInfo />
             </div>
        </Provider>
        
    }
} 