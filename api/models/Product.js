const Sequelize = require('sequelize');
const connection = require('../db/connection');

const Product = connection.define("Products", {
	id: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	prod_number: {
		type: Sequelize.STRING(45),
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(45),
		allowNull: false
	},
	price: {
		type: Sequelize.STRING(45),
		allowNull: false
	}
})

module.exports = Product;
