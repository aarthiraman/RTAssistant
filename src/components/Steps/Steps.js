import React from 'react';
import './Steps.css';

export default function({stepsStatus, statusText}) {
	return <div className='steps-wrapper'>
		<ul>
			{
				stepsStatus.map((status, len) => 
					(
						<li className={stepsStatus[len] ? 'steps-list__selected steps-list' : 'steps-list'}>
							<div className='steps-list__item'>{len}</div>
							<div className='steps-list__text'>{statusText[len]}</div>
						</li>
					))
			}
		</ul>
	</div>;
} 