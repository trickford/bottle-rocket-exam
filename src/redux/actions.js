export const FETCH_LOCATIONS_START = 'FETCH_LOCATIONS_START';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

const fetchLocationsStart = () => ({
	type: FETCH_LOCATIONS_START,
});

const fetchLocationsSuccess = locations => ({
	type: FETCH_LOCATIONS_SUCCESS,
	locations,
});

const fetchLocationsFailure = error => ({
	type: FETCH_LOCATIONS_FAILURE,
	error,
});

export const getLocations = () => (dispatch) => {
	dispatch(fetchLocationsStart());

	console.log('fetch');

	// fetch results here
	// dispatch(fetchLocationsSuccess(response));
	// dispatch(fetchLocationsFailure(error));
};
