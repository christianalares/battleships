// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
import { setGameState } from '../../actions/app'

// Components
import Ship from './Ship'

// Style
import styles from './infopanel.css'

class InfoPanel extends Component {
	constructor(props) {
		super(props)

		this.handleReadyClick = this.handleReadyClick.bind(this)
	}

	renderMessage() {
		if(this.props.gameState === 'start') {

			const ships = this.props.ships.map( (ship) => {
				return <Ship length={ship.length} />
			} )

			return (
				<div>
					<h3>Place your ships!</h3>
					<p>Hit the ready button when you're done!</p>

					<div className={styles.shipsWrapper}>
						{ ships }
					</div>

					<button onClick={this.handleReadyClick}>Ready!</button>
				</div>
			)
		} else if(this.props.gameState === 'ongoing') {
			return (
				<div>
					<h3>Shoot!</h3>
					<p>Aim at the opponents board and fire off!</p>
				</div>
			)
		}

	}

	handleReadyClick() {
		this.props.dispatch( setGameState('ongoing') )
	}

    
	render() {
		return (
			<div className={styles.wrapper}>
				{ this.renderMessage() }
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

export default connect(mapStateToProps)(InfoPanel)