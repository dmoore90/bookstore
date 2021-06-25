const express = require('express');
const controller = require('../controllers/customerController');
const customerRouter = express.Router();
const authenticateJWT = require('../security/authenticateJWT');

customerRouter.post('/customer/register', controller.postRegister);
customerRouter.post('/customer/login', controller.postLogin);
customerRouter.get('/customer/profile', authenticateJWT, controller.getProfile);
customerRouter.post('/customer/logout', authenticateJWT, controller.postLogout);

module.exports = customerRouter;