import { handleActions } from 'redux-actions'

export default handleActions({
	SET_GAME_STATE: (state, action) => {
		return ({
			...state,
			gameState: action.payload
		})
	}
	
}, {
	// start, ongoing, end
	gameState: 'start'
})