import React, { Component } from 'react'
import styles from './app.css'

import Board from '../Board'

// const board = [
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', ''],
// 	['', '', '', '', '', '', '', '', '', '']
// ]

class App extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Board />
			</div>
		)
	}
}

export default App
