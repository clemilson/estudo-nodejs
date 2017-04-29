'use strict';

require('dotenv').config();
const   autenticar  = require('./../actions/action-autenticar'),
        md5         = require('md5'),
        auth        = require('./../../../_config/authentication'),
        callback401 = require('./../../../_config/actions/action-callback-http-401-data');

const controller = (Model) => {
    return (req, res) => {
        const username          = req.body.usuario;
        const senha_encriptada  = md5(req.body.senha, process.env.JWT_salt_key);
        
        autenticar(Model, username, senha_encriptada)
            .then(usuario => {
                if(!usuario) return callback401(res, TEXTS.restrict_access);
                const token = auth.autenticar(usuario);
                res.json({ token, usuario });
            })
            .catch((err) => {
                res.json('Erro: ', err);
            })
    }
}

module.exports = controller;