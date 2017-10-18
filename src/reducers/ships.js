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
			name: 's2_1',
			length: 2,
			posX: 0,
			posY: 0,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's2_2',
			length: 2,
			posX: 2,
			posY: 0,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's2_3',
			length: 2,
			posX: 4,
			posY: 0,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's2_4',
			length: 2,
			posX: 6,
			posY: 0,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's3_1',
			length: 3,
			posX: 0,
			posY: 3,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's3_2',
			length: 3,
			posX: 2,
			posY: 3,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's3_3',
			length: 3,
			posX: 2,
			posY: 3,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's4_1',
			length: 4,
			posX: 6,
			posY: 3,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's4_2',
			length: 4,
			posX: 8,
			posY: 3,
			direction: 'v',
			hitPoints: 0,
			isSink: false
		},
		{
			name: 's6_1',
			length: 6,
			posX: 0,
			posY: 9,
			direction: 'h',
			hitPoints: 0,
			isSink: false
		}
	]
})