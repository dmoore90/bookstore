const express = require('express');
const controller = require('../controllers/adminController');
const adminRouter = express.Router();
const authenticateJWT = require('../security/authenticateJWT');

adminRouter.post('/adminLogin', controller.postAdminLogin);
adminRouter.post('/adminLogout', authenticateJWT, controller.postAdminLogout);
adminRouter.get('/adminShop', authenticateJWT, controller.getProducts);
adminRouter.post('/createProduct', authenticateJWT, controller.postProduct);
adminRouter.get('/product/:id', authenticateJWT, controller.getProduct);
adminRouter.post('/product', authenticateJWT, controller.postUpdateProduct);
adminRouter.post('/deleteProduct', authenticateJWT, controller.deleteProduct);

module.exports = adminRouter;