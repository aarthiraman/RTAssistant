import React from 'react';
import './MyInfo.css';

export default function myInfo({ greetings, ISTTime, localTime }) {
	return <div className='app-info'>
            <div class="grid">
                <div class="cell">
                    <div class="grid">
                    <div class="cell">
                        <h2>{greetings}</h2>
                    </div>
                    </div>
                    <div class="grid">
                            <div class="cell block-color">
                                <h3>Time here</h3>
                                {localTime}
                            </div>
                            <div class="cell block-color">
                                <h3>Time at home</h3>
                                {ISTTime}
                            </div>
                    </div>
                </div>
              
            </div>
        </div>;
} 