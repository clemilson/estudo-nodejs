'use strict';

const obterTodos = require('./../actions/action-crud').obterTodos;

const controller = (Model) => {
    return (req, res) => {

        obterTodos(Model)
            .then((jogo) => {
                res.json(jogo);
            })
            .catch((err) => {
                console.log(err)
                res.send('Erro: ', err);
            })
    }
}

module.exports = controller;