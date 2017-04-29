'use strict';

const cadastrar = require('./../actions/action-crud').cadastrar;

const method = (Model) => {
    return (req, res) => {
        
        const body = req.body;
        
        cadastrar(Model, body)
            .then((area) => {
                res.json(area);
            })
            .catch((err) => {
                res.send('Deu ruim: ', err);
            })
    }
}

module.exports = method;