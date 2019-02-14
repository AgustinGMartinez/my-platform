import t from './types';

export const showMessage = (
	bootstrapColor,
	message,
	time = 12000
) => dispatch => {
	dispatch({
		type: t.DISPLAY_MESSAGE,
		data: {
			type: bootstrapColor,
			message
		}
	});

	window.setTimeout(() => {
		dispatch({ type: t.HIDE_MESSAGE });
	}, time);
};

export default showMessage;
