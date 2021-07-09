const Product = require('../models/Product');

exports.getShop = (req, res) => {
	Product.findAll()
	.then(products => {
		res.location('/shop');
		return res.status(200).json(products);
	})
	.catch(err => {
		console.log(err);
		return res.sendStatus(401);
	})
}

exports.getProduct = (req, res) => {
	const id = req.params.id;
	Product.findByPk(id)
	.then(product => {
		return res.status(200).json({product});
	})
	.catch(err => {
		console.log(err);
		return res.sendStatus(401);
	})
}