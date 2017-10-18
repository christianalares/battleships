// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
// import { buildBoard } from '../../actions/board'

// Components
import Ship from './Ship'

// Style
import styles from './dock.css'

class Dock extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<h2>Place ships!</h2>
				{
					this.props.ships.map( (ship, i) => {
						return <Ship key={i} ship={ship} />
					} )
				}
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

export default connect(mapStateToProps)(Dock)
