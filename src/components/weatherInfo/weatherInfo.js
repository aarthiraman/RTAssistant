import React from 'react';
import { getWeatherDetails } from '../weatherInfo/weatherService';

export default function() {

    getWeatherDetails();
    return <div className='weather-info'>
            <div class="grid">
                    <div class="cell block-color">
                        <h3>Weather for you</h3>
                        
                    </div>
            </div>
        </div>
} 