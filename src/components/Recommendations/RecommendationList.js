import React from 'react';
import './Recommendations.css';

export default function Recommendations({recommendations, onSelect, onDone}) {
	return <div>
		<div class="grid">
			{!recommendations.done && <div class="cell">
				<h2>Cool .... now tell us your interests</h2>
				<div>
					<ul>
						{
							recommendations.list.map(listItem => {
								const listItemClass = listItem.selected ? 'recomm-item__selected' : 'recomm-item';
									
								return <li className={listItemClass} onClick={() => onSelect(listItem.text)}> 
									{listItem.text}
								</li>;  
							})
						}
					</ul>
				</div>
				<button onClick={() => onDone()} className="done">I am done now</button>
			</div>}

			{recommendations.done && <div class="cell">
						All done now
			</div>}
		</div>
	</div>;
}

