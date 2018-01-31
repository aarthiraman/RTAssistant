/* eslint strict: 0 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let options ={
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{
				test: /\.css$/, 
				loader: 'style!css' 
			},
			{
				loader: 'url-loader',
				test: /\.(svg|eot|ttf|woff|woff2)?$/
			}
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: path.join(__dirname, 'src'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx' ],
		packageMains: ['webpack', 'browser', 'web',  'main']
	},
	entry: [
		'./src/index'
	],
	debug: true

};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;

