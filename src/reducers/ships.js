import { handleActions } from 'redux-actions'

export default handleActions({
	SET_SHIPS: (state, action) => {
		return ({
			...state,
			board: action.payload
		})
	}
}, {
	ships: [
        {
			name: 's1',
			length: 2,
			posX: 0,
			posY: 0,
			direction: 'h',
			hits: [false, false]
		},
		{
			name: 's2',
			length: 2,
			posX: 4,
			posY: 4,
			direction: 'v',
			hits: [false, false]
		},
		{
			name: 's3',
			length: 2,
			posX: 6,
			posY: 6,
			direction: 'h',
			hits: [false, false]
		},
		{
			name: 's4',
			length: 2,
			posX: 4,
			posY: 8,
			direction: 'v',
			hits: [false, false]
		}
    ]
})