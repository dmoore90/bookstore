const express = require('express');
const controller = require('../controllers/adminController');
const adminRouter = express.Router();
const authenticateJWT = require('../security/authenticateJWT');

adminRouter.post('/admin/adminLogin', controller.postAdminLogin);
adminRouter.post('/admin/logout', authenticateJWT, controller.postAdminLogout);
adminRouter.get('/admin/adminShop', authenticateJWT, controller.getProducts);
adminRouter.post('/admin/createProduct', authenticateJWT, controller.postProduct);
adminRouter.get('/admin/product/:id', authenticateJWT, controller.getProduct);
adminRouter.post('/admin/product', authenticateJWT, controller.postUpdateProduct);
adminRouter.post('/admin/deleteProduct', authenticateJWT, controller.deleteProduct);

module.exports = adminRouter;