"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 11/07/2021
 * Time: 12:51 PM
 */

// Create and send token, and save in the cookie
const sendToken = (user, statusCode, res) => {

    // Create JWT Token
    const token = user.getJwtToken();

    // Option for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user,
    })
}
module.exports = sendToken;