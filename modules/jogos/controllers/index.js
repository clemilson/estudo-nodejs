'use strict';

const   mongoose        = require('mongoose'),
        Schema          = require('./../schemas/schema-jogo'),
        Model           = mongoose.model('jogos', Schema);

const   obterTodos  = require('./controller-obterTodos')(Model),
        obterPorId  = require('./controller-obterPorId')(Model),
        cadastrar   = require('./controller-cadastrar')(Model),
        create   = require('./controller-create')(Model),
        atualizar   = require('./controller-atualizar')(Model),
        excluir     = require('./controller-excluir')(Model);

const features = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    excluir,
    create 
};

module.exports = features;