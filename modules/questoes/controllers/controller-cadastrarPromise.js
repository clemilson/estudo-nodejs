'use strict';

const cadastrar = require('./../actions/action-crud').cadastrar;

const controller = (Model) => {
  return (questao) => {

    //retorna promise
    return cadastrar(Model, questao);

  };
};

module.exports = controller;