import React, { Component } from 'react'
import styles from './app.css'

import MyBoard from '../MyBoard'
import EnemyBoard from '../EnemyBoard'
import InfoPanel from '../InfoPanel'

class App extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<h2>Your ships</h2>
					<MyBoard />
					<InfoPanel />
				</div>

				<div className={styles.right}>
					<h2>Enemy ships</h2>
					<EnemyBoard />
					<InfoPanel />
				</div>
			</div>
		)
	}
}

export default App
