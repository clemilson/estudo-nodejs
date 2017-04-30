const Model = require('./../model')

//features
const obterTodos = require('./controller-obterTodos')(Model),
    obterPorId = require('./controller-obterPorId')(Model),
    cadastrar = require('./controller-cadastrar')(Model),
    atualizar = require('./controller-atualizar')(Model),
    excluir = require('./controller-excluir')(Model),
    cadastrarPromise = require('./controller-cadastrarPromise')(Model)

const features = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    excluir,
    cadastrarPromise
}

module.exports = features