import React, { Component } from 'react'

import { connect } from 'react-redux'

import { buildBoard } from '../../actions/board'

import Cell from '../Cell'

import styles from './enemyboard.css'

class EnemyBoard extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.putShipsOnBoard()
	}

	renderBoard() {
		return this.props.board.map( (row, y) => {
			return row.map( (cell, x, board) => {
				// key = 1 through 100?!?!?!
				return (cell.ship)
					? <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={cell} />
					: <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={null} />
			} )
		} )
	}

	putShipsOnBoard() {
		const boardLength = this.props.board.length
		const tempBoard = this.props.board

		this.props.ships.forEach( (ship) => {
			for(let i = 0; i < ship.length; i++) {
				if(ship.direction === 'h') {
					tempBoard[ship.posY][ship.posX + i].ship = ship
				} else {
					tempBoard[ship.posY + i][ship.posX].ship = ship
				}
			}
		} )

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

export default connect(mapStateToProps)(EnemyBoard)
