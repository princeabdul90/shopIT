"use strict";
/**
 * Developer: Abubakar Abdullahi
 * Date: 09/07/2021
 * Time: 9:14 AM
 */

module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)