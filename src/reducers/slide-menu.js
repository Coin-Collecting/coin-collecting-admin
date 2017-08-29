
const initialState = {
	open: false,
};

const slideMenu = (state = initialState, action) => {
	switch (action.type) {
		case 'CLOSE_SLIDE_MENU':
			document.getElementsByTagName('body')[0].className = 'slid-left';
			return {
				open: false,
			};
		case 'TOGGLE_SLIDE_MENU':
			return {
				open: !state.open,
			};
		default:
			return state
	}
};

export default slideMenu
