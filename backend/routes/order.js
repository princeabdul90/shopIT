"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 13/07/2021
 * Time: 3:01 PM
 */
const express = require('express'),
    router = express.Router();

const { newOrder, getOrder, myOrders, allOrders, updateOrders, deleteOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);
router.route('/orders').get(isAuthenticatedUser,authorizeRoles('admin'), allOrders);
router.route('/order/:id')
                            .patch(isAuthenticatedUser,authorizeRoles('admin'), updateOrders)
                            .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

module.exports = router;