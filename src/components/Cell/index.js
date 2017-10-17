import React, { Component } from 'react'

import { connect } from 'react-redux'

import { buildBoard } from '../../actions/board'

import styles from './cell.css'

class Cell extends Component {
	constructor(props) {
		super(props)

		this.guessCell = this.guessCell.bind(this)
	}

	guessCell(x, y) {
		const tempBoard = [...this.props.board]

		tempBoard[y][x].isFiredAt = true

		// If ship is hit
		if( this.props.board[y][x].ship ) {
			tempBoard[y][x].ship.hitPoints++
		} else {
			console.log( 'miss: ', tempBoard[y][x] )
		}
		
		// Update the board state
		this.props.dispatch( buildBoard(tempBoard) )
	}

	renderClassName() {
		let className = styles.wrapper;

		if(this.props.isFiredAt) {
			className += ' ' + styles.bombed
		}
		
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