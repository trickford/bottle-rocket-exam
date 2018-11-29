import {
	createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import locations from './reducers/locations';

const reducers = combineReducers({ locations });


export default createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);
