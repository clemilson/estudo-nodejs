const cadastrar = require('./../actions/action-crud').create

const controller = (Model) =>
  (questao) =>
    cadastrar(Model, questao)

module.exports = controller