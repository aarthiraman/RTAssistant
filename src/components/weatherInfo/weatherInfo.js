import React from 'react';
import './weatherInfo.css';
import  'open-weather-icons/dist/css/open-weather-icons.css';


export default function({iconClass, temp}) {
	return <div className='weather-info'>
		<div className={`owi owi-${iconClass}`}>
		</div>
		<div className='weather-temp'>{temp} &deg;C</div>
	</div>;
} 