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

		// If the cell has not been fired at before
		if(!tempBoard[y][x].isFiredAt) {
			// That position in the board array has been fired at
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
		} else {
			console.log( 'You can\'t fire at this place again' )
		}
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
		
		// Is it a ship or the sea?
		className += (this.props.ship)
			? ' ' + styles.ship + ' ' + styles[this.props.ship.name]
			: ' ' + styles.noShip

		return className
	}

	handleCellClick(x, y) {
		switch (this.props.gameState) {
			case 'start':
				console.log( 'FLYTTA DÅÅÅÅ!!!' )
				break

			case 'ongoing':
				this.guessCell(x, y)
			
				break

			default:
				break
		}
	}

	render() {
		return (
			<div
				onClick={() => this.handleCellClick(this.props.x, this.props.y)}
				className={this.renderClassName()}>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		board: state.board.board,
		ships: state.ships.ships,
		gameState: state.app.gameState
	}
}

export default connect(mapStateToProps)(Cell)