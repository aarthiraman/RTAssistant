import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from '../../utils/createStore';

import './home.css';
import MyInfo from '../../components/myInfo/myInfo';
import WeatherInfo from '../../components/weatherInfo/weatherInfo';

import { setGreetings, setTime } from '../../components/myInfo/MyInfoActions';
import { setWeather } from '../../components/weatherInfo/Actions';

export class HomePage extends Component {
	constructor(props)
{
		super(props); 
	}

	componentDidMount() {
		this.props.dispatchSetGreetings();
		this.props.dispatchSetTime(); 
		this.props.dispatcSetWeather();           
	}

	render() {
		const { info, weather } =this.props;
		return <div className='app'>
                <MyInfo  {...info}/>
                <WeatherInfo {...weather} />
            </div>;
	}
} 

const mapStateToProps = (state) => ({
	i18n: state.i18n,
	info: state.info,
	weather: state.weather
});

export default connect(
mapStateToProps, {
	dispatchSetGreetings: setGreetings,
	dispatchSetTime: setTime,
	dispatcSetWeather: setWeather
}
)(HomePage);