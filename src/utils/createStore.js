
import { createStore as initialCreateStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export let createStore = (reducer) => {
	const middlewares = [thunk];

	// if (process.env.NODE_ENV === 'development') {
	const logger = createLogger();
	middlewares.push(logger);
	//   }

	return applyMiddleware(...middlewares)(initialCreateStore)(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

