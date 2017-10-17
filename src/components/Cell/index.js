// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
import { buildBoard } from '../../actions/board'

// Style
import styles from './cell.css'

class Cell extends Component {
	// constructor(props) {
	// 	super(props)

	// 	this.guessCell = this.guessCell.bind(this)
	// }

	guessCell(x, y) {
		// Copy the state
		const tempBoard = [...this.props.board]

		// That position in the board array has been fired ad
		tempBoard[y][x].isFiredAt = true

		// If ship is hit
		if( this.props.board[y][x].ship ) {
			
			// Add hit to the ship
			tempBoard[y][x].ship.hitPoints++

			// If hitpoints reached the whole ship, set sink to true
			if(tempBoard[y][x].ship.hitPoints === tempBoard[y][x].ship.length) {
				tempBoard[y][x].ship.isSink = true
			
			}
		
		// If ship is not hit
		} else {
			console.log( 'miss: ', tempBoard[y][x] )
		}
		
		// Update the board state
		this.props.dispatch( buildBoard(tempBoard) )
	}

	renderClassName() {
		let className = styles.wrapper

		// Add bombed class to cell that has been fired at
		if(this.props.isFiredAt) {
			className += ' ' + styles.bombed
		}

		// Add sink class to ship that is is sink
		if(this.props.ship) {
			if(this.props.ship.isSink) {
				className += ' ' + styles.sink
			}
		}
		
		// Is it a shop or the sea?
		className += (this.props.ship)
			? ' ' + styles.ship
			: ' ' + styles.noShip

		return className
	}

	render() {
		return (
			<div
				onClick={() => this.guessCell(this.props.x, this.props.y)}
				className={this.renderClassName()}>
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

export default connect(mapStateToProps)(Cell)