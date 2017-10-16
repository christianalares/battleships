import React, { Component } from 'react'

import { connect } from 'react-redux'

import { buildBoard } from '../../actions/board'

import styles from './cell.css'

class Cell extends Component {
	constructor(props) {
		super(props)

		console.log( buildBoard )
	}

	guessCell(x, y, ship) {
		const tempBoard = this.props.board
		tempBoard[y][x].isFiredAt = true

		if(this.isHit(x, y)) {
			console.log( ship )
		} else {
			console.log( 'MISS' )
		}

		this.props.dispatch( buildBoard(tempBoard) )
	}

	isHit(x, y) {
		return (this.props.board[y][x].name)
			? true
			: false
	}

	renderClassName() {
		let className = styles.wrapper;

		if(this.props.isFiredAt) {
			className += ' ' + styles.bombed
		}
		
		if(this.props.ship !== '') {
			className += ' ' + styles.ship
		} else {
			className += ' ' + styles.noShip
		}

		return className
	}

	render() {
		return (
			<div
				onClick={() => this.guessCell(this.props.x, this.props.y, this.props.ship)}
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
