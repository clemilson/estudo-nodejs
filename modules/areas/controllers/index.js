'use strict';

const Model = require('./../model')

const   obterTodos = require('./controller-obterTodos')(Model),
        obterPorId = require('./controller-obterPorId')(Model),
        cadastrar = require('./controller-cadastrar')(Model),
        atualizar = require('./controller-atualizar')(Model),
        excluir = require('./controller-excluir')(Model)

const features = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    excluir
}

module.exports = features
