import { SET_AUTH } from '../actions';

const auth = (state = false, action) => {
	switch (action.type) {
		case SET_AUTH:
			return action.payload;
		default:
			return state;
	}
};

export default auth;
