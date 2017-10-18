// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
// import { buildBoard } from '../../actions/board'

// Components
// import Ship from '../Ship'

// Style
import styles from './ship.css'

class Ship extends Component {
	constructor(props) {
		super(props)
	}
	
	renderShip() {
		let ship = []

		for (let i = 0; i < this.props.ship.length; i++) {
			ship.push(<span key={i} />)
		}

		return ship

		// console.log( ship )
		// return ship.map( (ship, i) => {
		// 	return <div key={i}>{ship}</div>
		// })
	}


	render() {
		// this.renderShip()

		return (
			<div className={styles.wrapper}>
				{ this.renderShip() }
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

export default connect(mapStateToProps)(Ship)
