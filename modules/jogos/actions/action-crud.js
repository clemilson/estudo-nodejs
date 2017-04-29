'use strict';

const action = {};

action.obterTodos = (Model) => {
    const query = { "exclusao_logica": false };
    return Model.find(query).populate("topicos.questoes");
}

action.obterPorId = (Model, id) => {
    const query = { _id: id, "exclusao_logica": false };
    return Model.findOne(query).populate("topicos.questoes");
}

action.cadastrar = (Model, body) => {
    const model = new Model(body);
    return model.save();
}

action.create = (Model, body) => Model.create(body)

action.atualizar = (Model, mod, id) => {
    const query = { _id: id };
    return Model.update(query, body);
}

action.excluir = (Model, id) => {
    const query = { _id: id};
    const mod   = { exclusao_logica : true };
    return Model.update(query, mod);
}

module.exports = action;