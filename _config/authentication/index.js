'use strict';

const JWT = require('./jwt');

const Authentication = {};

Authentication.autenticar = (usuario) => {
    return JWT.autenticar(usuario);
}
Authentication.authorize = (req, res, next) => {    
    JWT.verify(req, res, next);
}
Authentication.isAdmin = (req, res, next) => {
    JWT.isAdmin(req, res, next);
}
Authentication.getUser = (req, res, next) => {
    JWT.getUser(req, res, next);
}

module.exports = Authentication;
