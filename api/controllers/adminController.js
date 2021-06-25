const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../security/authenticateJWT');
const JWT_KEY = require('../config/security');


exports.postAdminLogin = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({ where: {username: username } })
	.then(user => {
		if(!user) { return res.sendStatus(401); }
		bcrypt.compare(password, user.password)
			.then(valid => {
				if (valid) {
					const token = jwt.sign({ id: user.dataValues.id, username: user.username }, JWT_KEY.secret, { expiresIn: "1h" });
					res.cookie('auth', token, { httpOnly: true, secure: true, sameSite: true });
					res.redirect('adminShop');
				} else {
					return res.sendStatus(401);
				}
			})
			.catch(err => { console.log(err) })
	})
}

exports.postAdminLogout = (req, res) => {
	if (req.user.username != "admin") {
		return res.sendStatus(401);
	}
	res.clearCookie('auth');
	return res.sendStatus(200);
}

exports.getProducts = (req, res) => {
	if (req.user.username != "admin") {
		return res.sendStatus(401);
	}
	Product.findAll()
	.then(products => {
		res.location('/adminShop');
		return res.status(200).json(products);
	})
	.catch(err => {
		console.log(err);
		return res.sendStatus(401);
	})
}

exports.postProduct = (req, res) => {
	if (req.user.username != "admin") {
		return res.sendStatus(401);
	}
	const name = req.body.name;
	const price = req.body.price;

	Product.create({
		name: name,
		price: price
	}).then(success => {
		return res.redirect('/adminShop')
	}).catch(err => {
		console.log(err);
		return res.sendStatus(404);
	})
}

exports.getProduct = (req, res) => {
	if (req.user.username != "admin") {
		return res.sendStatus(401);
	}

	const id = req.params.id;
	Product.findByPk(id)
		.then(product => {
			return res.status(200).json(product);
		})
		.catch(err => {
			console.log(err);
			return res.sendStatus(404);
		})	
}

exports.postUpdateProduct = (req, res) => {
	if (req.user.username != "admin") {
		return res.sendStatus(401);
	}

	const id = req.body.id;
	const name = req.body.name;
	const price = req.body.price;

	Product.findByPk(id)
	.then(product => {
		console.log(product.name)
		product.name = name;
		product.price = price;
		return product.save();
	})
	.then(result => {
		return res.redirect('/adminShop');
	})
	.catch(err => {
		console.log(err);
		return res.sendStatus(404);
	})
}

exports.deleteProduct = (req, res) => {
	if (req.user.username != "admin") {
		return res.sendStatus(401);
	}

	const id = req.body.id;
	Product.destroy({ where: { id: id}})
	.then(success => {
		res.redirect('/adminShop');
	})
	.catch(err => { console.log(err) });
}