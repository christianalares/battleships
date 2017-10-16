import React, { Component } from 'react'

import { connect } from 'react-redux'

import { buildBoard } from '../../actions/board'

import Cell from '../Cell'

import styles from './board.css'

class Board extends Component {
	constructor(props) {
		super(props)
		console.log( buildBoard )
	}

	componentWillMount() {
		this.putShipsOnBoard()
	}

	renderBoard() {
		return this.props.board.map( (posY, y) => {
			return posY.map( (posX, x) => {
				let isFiredAt = (posX.isFiredAt) ? true : false

				return (posX.name)
					? <Cell isFiredAt={isFiredAt} key={x+y} x={x} y={y} ship={posX} />
					: <Cell isFiredAt={isFiredAt} key={x+y} x={x} y={y} ship="" />
			} )
		} )
	}

	putShipsOnBoard() {
		const boardLength = this.props.board.length
		const tempBoard = this.props.board

		this.props.ships.forEach( (ship) => {
			for(let i = 0; i < ship.length; i++) {
				if(ship.direction === 'h') {
					tempBoard[ship.posY][ship.posX + i] = ship
				} else {
					tempBoard[ship.posY + i][ship.posX] = ship
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

export default connect(mapStateToProps)(Board)
