
export const buildBoard = (board) => (dispatch) => {
	dispatch({
		type: 'SET_BOARD',
		payload: board
	})
}