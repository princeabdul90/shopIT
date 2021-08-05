"use strict";

const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const { newProduct,
        getProducts, 
        getAdminProducts, 
        getProduct, 
        updateProduct, 
        deleteProduct,
        createProductReview, 
        getReviews, 
        deleteReviews
     } = require('../controllers/productController');

router.route('/product/list').get(getProducts);
router.route('/admin/product/list').get(getAdminProducts);
router.route('/product/view/:id').get(getProduct);
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router.route('/product/:id')
                                .patch(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
                                .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

router.route('/review').patch(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReviews);

module.exports = router;