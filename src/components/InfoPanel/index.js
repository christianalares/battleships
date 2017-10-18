// React stuff
import React, { Component } from 'react'

// Redux stuff
import { connect } from 'react-redux'

// Actions
// import { buildBoard } from '../../actions/board'

// Components
// import Ship from '../Ship'

// Style
import styles from './infopanel.css'

class InfoPanel extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		
	}

    
	render() {
		return (
			<div className={styles.wrapper}>
				<h2>Info</h2>
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

export default connect(mapStateToProps)(InfoPanel)
