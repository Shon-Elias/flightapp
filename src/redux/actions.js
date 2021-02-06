export const SET_AUTH = 'AUTH';
export const ADD_FLIGHT = 'ADD_FLIGHT';

export const setAuth = auth => ({
	type: SET_AUTH,
	payload: {
		auth
	}
});

export const addFlight = (id, from, to, departureTime, landingTime, price) => ({
	type: ADD_FLIGHT,
	payload: { id, from, to, departureTime, landingTime, price }
});
