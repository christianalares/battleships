import React, { Component } from 'react'
import styles from './app.css'

import MyBoard from '../MyBoard'
import Dock from '../Dock'
// import EnemyBoard from '../EnemyBoard'

class App extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<MyBoard />
				<Dock />
			</div>
		)
	}
}

export default App
