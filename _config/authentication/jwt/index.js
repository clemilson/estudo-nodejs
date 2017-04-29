'use strict';

require('dotenv').config();
const jwt           = require('jsonwebtoken');
const getToken      = require('./../getToken');
const callback401   = require('./../../actions/action-callback-http-401-data');
const salt_key      = process.env.JWT_salt_key;
const expires_in    = process.env.JWT_time_expires_token;

const JWT = {};

JWT.autenticar = (usuario) => {
    const loginData = { id: usuario._id, usuario: usuario.credenciais.local.usuario };
    const options   = { expiresIn: expires_in };
    return jwt.sign(loginData, salt_key, options);
}

JWT.verify = (req, res, next) => {
    let token = getToken(req);
    if (!token) callback401(res, TEXTS.restrict_access);
    else {
        jwt.verify(token, salt_key, (err, tokenDecoded) => {
            if (err) return callback401(res, TEXTS.invalid_token);
            else next();
        });
    }
}

JWT.isAdmin = (req, res, next) => {
    let token = getToken(req);

    if (!token) callback401(res, TEXTS.restrict_access);
    else {
        jwt.verify(token, salt_key, (err, tokenDecoded) => {
            if (err) callback401(res, TEXTS.invalid_token);
            else {
                if (tokenDecoded.admin) next();
                else callback401(res, TEXTS.restrict_area);
            }
        });
    }
}

JWT.getUser = (req, res, next) => {
    let token = getToken(req);

    if (!token) callback401(res, TEXTS.restrict_access);
    else {
        jwt.verify(token, salt_key, (err, tokenDecoded) => {
            if (err) callback401(res, err);
            else {
                req.tokenDecoded = tokenDecoded;
                next();
            }
        });
    }
};

module.exports = JWT;