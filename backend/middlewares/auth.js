"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 11/07/2021
 * Time: 1:20 PM
 */
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/users');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

   if (!token) {
       return next(new ErrorHandler('Login first to access this resource.', 401))
   }

   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.user = await User.findById(decoded.id);

   next()
})

// Handling User Roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403))
        }
        next()
    }
}