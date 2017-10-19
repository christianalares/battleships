import { combineReducers } from 'redux'
import board from './board'
import ships from './ships'
import app from './app'

export default combineReducers({
	board,
	ships,
	app
})