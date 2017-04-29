'use strict';

const excluir = require('./../actions/action-crud').excluir;

const controller = (Model) => {
    return (req, res) => {

        const id = req.params.id;

        excluir(Model, id)
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