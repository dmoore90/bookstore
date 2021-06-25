const express = require('express');
const controller = require('../controllers/shopController');
const shopRouter = express.Router();

shopRouter.get('/shop', controller.getShop);

module.exports = shopRouter;