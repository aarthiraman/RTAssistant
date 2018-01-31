import React from 'react';
import { getWeatherDetails } from '../weatherInfo/weatherService';
import './weatherInfo.css';
import  'open-weather-icons/dist/css/open-weather-icons.css';


export default function({iconClass, temp}) {
	return <div className='weather-info'>
                <div class="grid">
                    <div class="cell block-color">
                        <h3>Weather for you</h3>

                        <div class="grid">
                                <div class="cell">
                                    <div className={`owi owi-${iconClass}`}>
                                        
                                     </div>
                                </div>
                                <div class="cell">
                                    <span>{temp} &deg;C</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>;
} 