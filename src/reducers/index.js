import { combineReducers } from 'redux'
import board from './board'
import ships from './ships'

export default combineReducers({
	board,
	ships
})