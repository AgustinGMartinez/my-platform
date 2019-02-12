const express = require('express');
const Router = express.Router();
const isAuth = require('../middleware/is-auth');
const { check } = require('express-validator/check');

const auth = require('../controllers/auth.js');

// Router.get('/allusers', isAuth, auth.allUsers);

Router.post(
	'/signup',
	[
		check('email')
			.isEmail()
			.normalizeEmail(),
		check('password')
			.trim()
			.isLength({ min: 6, max: 22 })
			.withMessage('Invalid password')
	],
	auth.signUp
);

Router.post('/signin', auth.signIn);

module.exports = Router;
