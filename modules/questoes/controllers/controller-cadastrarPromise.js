'use strict';

const cadastrar = require('./../actions/action-crud').create;

const controller = (Model) => {
  return (questao) => {

    //console.log('questao', questao)

    //retorna promise
    return cadastrar(Model, questao);

  };
};

module.exports = controller;