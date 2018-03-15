import React from 'react';
import './loaders.css';

export default function Loaders({children}) {
	return <div class="loader">
		{children}
		<div class="lds-circle"></div>
	</div>;
} 