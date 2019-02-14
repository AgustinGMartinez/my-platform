import * as t from '../actions/types';

const initialState = {
	show: false,
	type: null,
	message: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case t.DISPLAY_MESSAGE:
			return {
				show: true,
				type: action.data.type,
				message: action.data.message
			};
		case t.HIDE_MESSAGE:
			return { ...state, show: false };
		default:
			return state;
	}
};
