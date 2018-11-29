import {
	FETCH_LOCATIONS_START,
	FETCH_LOCATIONS_SUCCESS,
	FETCH_LOCATIONS_FAILURE,
} from '../actions';

const initialState = {
	list: [],
	error: '',
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case FETCH_LOCATIONS_SUCCESS:
		return {
			...state,
			list: action.locations.restaurants,
			error: '',
			loading: false,
		};
	case FETCH_LOCATIONS_FAILURE:
		return {
			...state,
			error: action.error,
			loading: false,
		};
	case FETCH_LOCATIONS_START:
	default:
		return {
			...state,
			error: '',
			loading: true,
		};
	}
}
