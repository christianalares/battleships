// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
// import { setGameState } from '../../actions/app'

// Components
import { DragSource } from 'react-dnd'

// Style
import styles from './ship.css'

const ItemTypes = {
	SHIP: 'ship'
}

const knightSource = {
	beginDrag(props) {
		return {}
	}
}

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

class Ship extends Component {
	constructor(props) {
		super(props)
	}

	renderShip() {
		let ship = []

		for (let i = 0; i < this.props.length; i++) {
			// console.log( this.props.length )
			ship.push(<span>&nbsp;</span>)
		}

		return ship
		// console.log( ship )
	}
	
	
	render() {
		this.renderShip()

		const { connectDragSource, isDragging } = this.props

		return connectDragSource(
			<div className={styles.wrapper}>
				{this.renderShip()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		gameState: state.app.gameState,
		ships: state.ships.ships
	}
}

export default connect(mapStateToProps)( DragSource(ItemTypes.SHIP, knightSource, collect)(Ship) )