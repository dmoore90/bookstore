const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../security/authenticateJWT');
const JWT_KEY = require('../config/security');
const formValidation = require('./formValidation')

exports.postRegister = (req, res) => {
	const first_name = formValidation.validateName(req.body.first_name);
	const last_name = formValidation.validateName(req.body.last_name);
	const email = formValidation.validateEmail(req.body.email);
	const username = formValidation.validateName(req.body.username);
	const password = req.body.password;
	const pass_confirmation = req.body.pass_confirmation;

	if (formValidation.validatePassword(password, pass_confirmation)) {
		const hashedPassword = bcrypt.hashSync(password, 10);
		User.create({
			first_name: first_name,
			last_name: last_name,
			email: email,
			username: username,
			password: hashedPassword
		})
		.then(result => {
			// return res.redirect('/');
			return res.sendStatus(200);
		})
		.catch(err => { return res.sendStatus(400) });
	} else {
		return res.sendStatus(400);
	}
}

exports.postLogin = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({ where: { username: username } })
		.then(user => {
			if (!user) {
				return res.sendStatus(401);
			}
			bcrypt.compare(password, user.password)
				.then(success => {
					if (success) {
			        	const token = jwt.sign({ id: user.dataValues.id, username: user.username }, JWT_KEY.secret, { expiresIn: "1h" });
						res.cookie('auth', token, { httpOnly: true, secure: true, sameSite: true });
						res.redirect('profile')
					} else {
						return res.sendStatus(401);
					}
				})
				.catch(err => {
					console.log(err);
					return res.sendStatus(404);
				})
		})
}

exports.getProfile = (req, res) => {
	const data = [];
	data.push([req.user.username])
	Product.findAll()
	.then(products => {
		res.location('/customer/profile');
		return res.status(200).json({products, username: req.user.username});
	})
	.catch(err => {
		console.log(err);
		return res.sendStatus(401);
	})
}

exports.postLogout = (req, res) => {
	res.clearCookie('auth');
	return res.sendStatus(200);
}