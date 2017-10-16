'use strict'

const webpack = require('webpack')
const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR  = path.resolve(__dirname, 'src')

module.exports = {
    devtool: 'eval-source-map',
    // entry: {
    //     app: './src/index.js'
    // },
    entry: [
        'webpack-hot-middleware/client?reload=true',
        SRC_DIR + '/index.js'
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env', 'stage-2']
                    }
                }
            },
            {
                test: /\.json$/,
                use: { loader: 'json' }
            },
            {
                test: /\.css$/,
                use: { loader: 'style-loader' }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            }
        ]
    }
}