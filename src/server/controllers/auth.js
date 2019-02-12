const userModel = require('../models/user');
const bcript = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');

const throwErr = (code, message) => {
	let err = new Error();
	err.status = code;
	err.message = message;
	return err;
};

exports.allUsers = (req, res) => {
	userModel.find().then(users => res.status(200).send(users));
};

exports.signUp = async (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ msg: errors.array()[0].msg });
	}
	let user = await userModel.findOne({ email: email });
	if (user) {
		return next(throwErr(422, 'User already exists'));
	}
	await bcript.hash(password, 12, (err, bp) => {
		if (err) {
			return next(throwErr(500, 'Internal error'));
		}

		user = new userModel({
			email: email,
			password: bp,
			info: {},
			shops: [],
			cart: [],
			wishes: [],
			orders: []
		});
		user.save();
		res.status(201).send();
	});
};

exports.signIn = async (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ msg: errors.array()[0].msg });
	}

	let user = await userModel.findOne({ email: email });

	if (!user) {
		return next(throwErr(422, 'Invalid email'));
	}

	bcript.compare(password, user.password, (err, valid) => {
		if (err) return next(throwErr(500, 'Internal error'));

		if (!valid) return next(throwErr(422, 'Invalid password'));

		const token = jwt.sign(
			{ email: user.email, userId: user._id.toString() },
			process.env.SECRET,
			{ expiresIn: '48h' }
		);
		res.status(200).send({ token: token, userId: user._id });
	});
};
