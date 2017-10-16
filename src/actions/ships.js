export const buildShips = (ships) => (dispatch) => {
	dispatch({
		type: 'SET_SHIPS',
		payload: ships
	})
}