"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 09/07/2021
 * Time: 8:30 AM
 */

const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = {...err}
        error.message = err.message

        // wrong Mongoose Object ID Error
        if (err.name === 'CastError') {
           const message = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose validation Error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        // Handling the mongoose duplicate key errors
        if (err.code === 11000){
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`
            error = new ErrorHandler(message, 400)
        }

        // Handling Wrong JWT Error
        if (err.name === 'JsonWebTokenError') {
            const message = 'JSON web Token is invalid. Try Again!!!';
            error = new ErrorHandler(message, 400);
        }

        // Handling Expired JWT Error
        if (err.name === 'TokenExpiredError') {
            const message = 'JSON web Token is expired. Try Again!!!';
            error = new ErrorHandler(message, 400);
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }

}