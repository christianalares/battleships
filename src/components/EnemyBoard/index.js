// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
import { buildBoard } from '../../actions/board'

// Components
import Cell from '../Cell'

// Style
import styles from './enemyboard.css'

class EnemyBoard extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		const allShips = [...this.props.ships]
		allShips.forEach( (ship, i) => {

			setTimeout(() => {
				// this.validateShip(ship)
			}, 100 * i)

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
					? <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={/*cell.ship*/null} />
					: <Cell isFiredAt={cell.isFiredAt} key={(y+1) * (x+1)} x={x} y={y} ship={null} />

			} )
		} )
	}

	validateShip(ship) {
		const boardSize = this.props.board.length
		let validPlacement = false
		
		// Random between 0 and 9
		const posX = Math.floor( Math.random() * boardSize )
		const posY = Math.floor( Math.random() * boardSize )

		// 50% chance of v or h
		const direction = (Math.random() < 0.5) ? 'v' : 'h'

		// If ship doesn't exceed the width/height of the board
		if( (direction === 'h' && posX + ship.length <= boardSize) || (direction === 'v' && posY + ship.length <= boardSize) ) {
			
			// Loop through the ships length and if it collides with another ship
			// Counter adds on the grid vertically or horizontally
			for (let i = 0; i < ship.length; i++) {
				let xCounter = (direction === 'h') ? i : 0
				let yCounter = (direction === 'v') ? i : 0


				if( !this.props.board[posY + yCounter][posX + xCounter].ship ) {
					validPlacement = true
				} else {
					validPlacement = false
					break
				}
			}

		}

		// If the placement is valid add the props
		// and put it on the boardelse do it again
		if(validPlacement) {
			ship.posX = posX
			ship.posY = posY
			ship.direction = direction

			this.putShipOnBoard(ship)
		} else {
			this.validateShip(ship)
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

export default connect(mapStateToProps)(EnemyBoard)
