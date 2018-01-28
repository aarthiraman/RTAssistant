import React, {Component } from 'react';
import './myInfo.css';
import { getGreetings, getLocalTime, ISTTime } from './getLocalTime';

export default function myInfo({ name }) {

    return <div className='app-info'>
            <div class="grid">
                <div class="cell">
                    <div class="grid">
                    <div class="cell">
                        <h2>{getGreetings()}, {name}</h2>
                    </div>
                    </div>
                    <div class="grid">
                            <div class="cell block-color">
                                <h3>Time here</h3>
                                {getLocalTime()}
                            </div>
                            <div class="cell block-color">
                                <h3>Time at home</h3>
                                {ISTTime()}
                            </div>
                    </div>
                </div>
              
            </div>
        </div>
} 