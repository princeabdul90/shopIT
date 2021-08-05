"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 11/07/2021
 * Time: 11:30 AM
 */
const express = require('express');
const router = express.Router();

const { 
        registerUser, 
        loginUser, 
        forgotPassword, 
        resetPassword,
        getUserProfile, 
        updatePassword, 
        updateProfile,
        allUsers, 
        getUserDetails, 
        updateUser,
        deleteUser,
        logoutUser 
    } = require('../controllers/authController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').patch(resetPassword);
router.route('/profile').get(isAuthenticatedUser, getUserProfile);
router.route('/password/update').patch(isAuthenticatedUser, updatePassword);
router.route('/profile/update').patch(isAuthenticatedUser, updateProfile);
router.route('/logout').get(logoutUser);

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
                                .patch(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
                                .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

module.exports = router;