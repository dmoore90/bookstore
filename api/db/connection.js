const Sequelize = require('sequelize');

const connection = new Sequelize('bookstore', 'user', 'pass', {
	host: 'localhost',
	port: '3306',
	dialect: 'mysql',
	define: {
		timestamps: false
	}
})

module.exports = connection;