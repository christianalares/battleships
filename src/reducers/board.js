import { handleActions } from 'redux-actions'

export default handleActions({
	SET_BOARD: (state, action) => {
		return ({
			...state,
			board: action.payload
		})
	}
}, {
	board: [
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }],
        [{ isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }, { isFiredAt: false }]
    ]
})