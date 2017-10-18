import React, { Component } from 'react'
import styles from './app.css'

import MyBoard from '../MyBoard'
// import EnemyBoard from '../EnemyBoard'

class App extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<MyBoard />
			</div>
		)
	}
}

export default App
