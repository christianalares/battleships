// import path from 'path'
// import express from 'express'
// import webpack from 'webpack'
// import webpackMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
// import config from '../webpack.config.js'

// const isDeveloping = process.env.NODE_ENV !== 'production'
// const port = isDeveloping ? 3000 : process.env.PORT

// const app = express()

// if (isDeveloping) {
// 	const compiler = webpack(config)
// 	const middleware = webpackMiddleware(compiler, {
// 		publicPath: config.output.publicPath,
// 		contentBase: 'src',
// 		stats: {
// 			colors: true,
// 			hash: false,
// 			timings: true,
// 			chunks: false,
// 			chunkModules: false,
// 			modules: false
// 		}
// 	})

// 	app.use(middleware)
// 	app.use(webpackHotMiddleware(compiler))
// 	app.get('*', function response(req, res) {
// 		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
// 		res.end()
// 	})
// } else {
// 	app.use(express.static(__dirname + '/dist'))
// 	app.get('*', function response(req, res) {
// 		res.sendFile(path.join(__dirname, 'dist/index.html'))
// 	})
// }

// app.listen(port, 'localhost', function onStart(err) {
// 	if (err) {
// 		console.log(err)
// 	}
// 	console.info('🌎 Listening on http://localhost:%s', port, port)
// })

import Path from 'path'
import Hapi from 'hapi'
import Inert from 'inert'
// import base from './base'

const webpack = require('webpack')
const WebpackPlugin = require('hapi-webpack-plugin')
const webpackConfig = require('../webpack.config.js')


// Create a server with a host and port
const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(Path.dirname(__dirname), 'dist')
			}
		}
	}
})

server.connection({
	host: 'localhost',
	port: process.env.PORT || 8000
})

server.register({
	register: WebpackPlugin,
	options: {
		compiler: webpack(webpackConfig),
		assets: {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath,
			quiet: true
		}
	}
}, (error) => {
	if(error) throw error
})



// server.register([
// 	{ register: Inert },
// 	{ register: base }
// ], (error) => {
// 	if(error) throw error

// 	server.start( () => console.log('Server running at:', server.info.uri) )
// })




// Add static routes

server.register(require('inert'), (error) => {
	if(error) throw error


	server.route({
		method: 'GET',
		path: '/static/{params*}',
		handler: {
			directory: {
				path: './static'
			}
		}
	})

	server.route({
		method: 'GET',
		path: '/{path*}',
		handler: {
			file: 'index.html'
		}
	})

	server.start((error) => {

		if (error) {
			throw error;
		}

		console.log('Server running at:', server.info.uri);
	});
})


// server.route({
// 	method: 'GET',
// 	path: '/hello',
// 	handler: function (request, reply) {

// 		return reply('hello world')
// 	}
// })

// Start the server
// server.start((err) => {

// 	if (err) {
// 		throw err
// 	}
// 	console.log('Server running at:', server.info.uri)
// })