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
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }],
        [{ ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }, { ship: null, isFiredAt: false }]
    ]
})