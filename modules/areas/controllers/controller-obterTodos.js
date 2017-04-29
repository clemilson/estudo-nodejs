'use strict';

const obterTodos = require('./../actions/action-crud').obterTodos;

const controller = (Model) => {
    return (req, res) => {
        
        obterTodos(Model)
            .then(data => {
                res.json(data);
            })
            .catch((err) => {
                res.send('Erro: ', err);
            })
    }
}

module.exports = controller;