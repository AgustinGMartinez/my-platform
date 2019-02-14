const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			'babel-runtime/regenerator',
			'webpack-hot-middleware/client?reload=true',
			'./src/main.js'
		]
	},
	mode: 'development',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	devServer: {
		contentBase: 'dist',
		overlay: true,
		stats: {
			colors: true
		}
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.s?css$/,
				include: /global\.s?css$/,
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
				// 	use: [
				// 		{
				// 			loader: 'css-loader',
				// 			options: {
				// 				modules: false,
				// 				localIdentName: '[name]__[local]--[hash:8]',
				// 				minimize: true
				// 			}
				// 		},
				// 		'postcss-loader',
				// 		'sass-loader'
				// 	]
				// })
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: false,
							localIdentName: '[name]__[local]--[hash:8]',
							minimize: true
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.s?css$/,
				exclude: /global\.s?css$/,
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
				// 	use: [
				// 		{
				// 			loader: 'css-loader',
				// 			options: {
				// 				modules: true,
				// 				localIdentName: '[name]__[local]--[hash:8]',
				// 				minimize: true
				// 			}
				// 		},
				// 		'postcss-loader',
				// 		'sass-loader'
				// 	]
				// })
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:8]',
							minimize: true
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					},
					{ loader: 'extract-loader' },
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
						}
					}
				]
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name].css'),
		new ErrorOverlayPlugin()
	]
};
