'use strict';

const obterPorId = require('./../actions/action-crud').obterPorId;

const controller = (Model) => {
    return (req, res) => {

        const id = req.params.id;

        obterPorId(Model, id)
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