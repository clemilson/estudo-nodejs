'use strict';

const cadastrar = require('./../actions/action-crud').cadastrar;

const controller = (Model) => {
    return (req, res) => {
        
        const body = req.body;
        
        cadastrar(Model, body)
            .then(data => {
                res.json(data);
            })
            .catch((err) => {
                res.send('Erro: ', err);
            })
    }
}

module.exports = controller;