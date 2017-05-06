const cadastrar = require('./../actions/action-crud').cadastrar

const controller = (Model) =>
  (questao) =>
    cadastrar(Model, questao)

module.exports = controller