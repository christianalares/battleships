// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
import { buildBoard } from '../../actions/board'

// Components
import Cell from '../Cell'

// Style
import styles from './myboard.css'

class MyBoard extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.putShipsOnBoard()
	}

	renderBoard() {
		// Loop every row
		return this.props.board.map( (row, y) => {
			// Loop every cell in every row
			return row.map( (cell, x) => {

				// Place a cell with a ship or not on that spot in the array
				// TODO: Fix a unique key value (1 through 100?)
				return (cell.ship)
					? <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={cell.ship} />
					: <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={null} />

			} )
		} )
	}

	putShipsOnBoard() {
		// Clone the state
		const tempBoard = [...this.props.board]

		// For every ship, take it's length and render it horizontally
		// or vertically depending ot the direction prop
		this.props.ships.forEach( (ship) => {
			for(let i = 0; i < ship.length; i++) {
				if(ship.direction === 'h') {
					tempBoard[ship.posY][ship.posX + i].ship = ship
				} else {
					tempBoard[ship.posY + i][ship.posX].ship = ship
				}
			}
		} )

		// Set the new build board to state
		this.props.dispatch( buildBoard(tempBoard) )
	}

	render() {
		return (
			<div className={styles.wrapper}>
				{ this.renderBoard() }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		board: state.board.board,
		ships: state.ships.ships
	}
}

export default connect(mapStateToProps)(MyBoard)
