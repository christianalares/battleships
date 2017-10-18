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
		// this.putShipsOnBoard()

		const allShips = [...this.props.ships]
		allShips.forEach( (ship, i) => {

			setTimeout(() => {
				// console.log( ship )
				this.placeShip(ship)
			}, 1000 * i)

		} )
	}

	renderBoard() {
		// Loop every row
		return this.props.board.map( (row, y) => {
			// Loop every cell in that row
			return row.map( (cell, x) => {
				// If there is a ship oject in that cell, return a cell with that ship,
				// otherwise a cell with null as ship

				// TODO: Fix a unique key value (1 through 100?)
				return (cell.ship)
					? <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={cell.ship} />
					: <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={null} />

			} )
		} )
	}

	placeShip(ship) {
		const boardSize = this.props.board.length
		let validPlacement = false
		
		// Random between 0 and 9
		const posX = Math.floor( Math.random() * boardSize )
		const posY = Math.floor( Math.random() * boardSize )

		// 50% chance of v or h
		const direction = (Math.random() < 0.5) ? 'v' : 'h'

		// If ship exceeds the width/height of the board
		if(direction === 'h' && posX + ship.length <= boardSize) {
			// If ship collides with !null (a ship)
			for (let i = 0; i < ship.length; i++) {
				if( !this.props.board[posY][posX + i].ship ) {
					console.log( ship.name, this.props.board[posY][posX + i].ship )
					validPlacement = true
				}
			}
		} else if(direction === 'v' && posY + ship.length <= boardSize) {
			for (let i = 0; i < ship.length; i++) {
				if( !this.props.board[posY + i][posX].ship ) {
					console.log( ship.name, this.props.board[posY + i][posX].ship )
					validPlacement = true
				}
			}
		}

		if(validPlacement) {
			ship.posX = posX
			ship.posY = posY
			ship.direction = direction

			this.putShipOnBoard(ship)
		} else {
			this.placeShip(ship)
		}
	}

	putShipOnBoard(ship) {
		// Clone the state
		const tempBoard = [...this.props.board]

		// Take the ships length and render it horizontally
		// or vertically depending on the direction prop
		for(let i = 0; i < ship.length; i++) {
			if(ship.direction === 'h') {
				tempBoard[ship.posY][ship.posX + i].ship = ship
			} else {
				tempBoard[ship.posY + i][ship.posX].ship = ship
			}
		}

		// Set the new build board to state
		this.props.dispatch( buildBoard(tempBoard) )
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
