"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 09/07/2021
 * Time: 8:20 AM
 */


class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler;