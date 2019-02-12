const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	console.log(req.headers);
	if (!req.headers['authorization']) {
		let error = new Error();
		error.status = 401;
		error.message = 'Invalid headers token';
		throw error;
	}
	let token = req.headers['authorization'].split(' ');
	if (token.length !== 2) {
		let error = new Error();
		error.status = 401;
		error.message = 'Invalid headers token';
		throw error;
	}
	token = token[1];
	let valid;
	try {
		valid = jwt.verify(token, process.env.SECRET);
	} catch (err) {
		let error = new Error('Invalid token');
		error.status = 401;
		throw error;
	}

	if (valid) return next();
	else {
		let error = new Error('Invalid token');
		error.status = 401;
		throw error;
	}
};
