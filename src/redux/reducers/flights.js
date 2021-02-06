import { ADD_FLIGHT } from '../actions';

const flights = (state = [], action) => {
	switch (action.type) {
		case ADD_FLIGHT:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default flights;
