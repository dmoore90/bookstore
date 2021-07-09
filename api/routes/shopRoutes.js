const express = require('express');
const controller = require('../controllers/shopController');
const shopRouter = express.Router();

shopRouter.get('/shop', controller.getShop);
shopRouter.get('/product/:id', controller.getProduct);

module.exports = shopRouter;