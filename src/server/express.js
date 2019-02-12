require('dotenv').config();
import express from 'express';
import { connect as mongooseConnect } from 'mongoose';
import bodyParser from 'body-parser';

// WEBPACK STUFF
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import configDevClient from '../../config/webpack.dev-client.js';
import configDevServer from '../../config/webpack.dev-server.js';
import configProdClient from '../../config/webpack.prod-client.js';
import configProdServer from '../../config/webpack.prod-server.js';

const server = express();
const expressStaticGzip = require('express-static-gzip');
const PORT = process.env.PORT || 6060;
const DOMAIN = process.env.DOMAIN;

server.use(bodyParser.json());
server.use('/api/', require('./routes/api'));

if (process.env.API_TEST !== 'true') {
	const isProd = process.env.NODE_ENV === 'production';
	const isDev = !isProd;
	if (isDev) {
		const compiler = webpack([configDevClient, configDevServer]);

		const clientCompiler = compiler.compilers[0];
		const serverCompiler = compiler.compilers[1];

		const webpackDevMiddleware = require('webpack-dev-middleware')(
			compiler,
			configDevClient.devServer
		);

		const webpackHotMiddlware = require('webpack-hot-middleware')(
			clientCompiler,
			configDevClient.devServer
		);

		server.use(webpackDevMiddleware);
		server.use(webpackHotMiddlware);
		server.use(webpackHotServerMiddleware(compiler));
		console.log('Middleware enabled');
	} else {
		webpack([configProdClient, configProdServer]).run((err, stats) => {
			const render = require('../../build/prod-server-bundle.js').default;
			server.use(
				expressStaticGzip('dist', {
					enableBrotli: true
				})
			);
			server.use(render());
			console.log('Webpack Compiled');
		});
	}
}

server.use((err, req, res, next) => {
	res.status(err.status).send({ msg: err.message });
});

console.log(process.env.MONGODB);

mongooseConnect(process.env.MONGODB, err => {
	if (err) {
		return console.log(
			'\x1b[33m%s\x1b[0m',
			"Couldn't connect to database!"
		);
	}
	server.listen(PORT, () => {
		console.log(
			'\x1b[33m%s\x1b[0m',
			`Server listening on ${DOMAIN}:${PORT} in ${process.env.NODE_ENV}`
		);
	});
});
