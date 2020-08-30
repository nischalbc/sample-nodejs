const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET
router.get('/products', adminController.getAdminProducts);

// /admin/edit-product => PUT
router.put('/edit-product', adminController.putEditProduct);

module.exports = router;
