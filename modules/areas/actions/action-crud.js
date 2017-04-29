'use strict';

const action = {};

action.obterTodos = (Model) => {
    const query = {};
    return Model.find(query);
}

action.obterPorId = (Model, id) => {
    const query = { _id: id };
    return Model.findOne(query);
}

action.cadastrar = (Model, body) => {
    const model = new Model(body);
    return model.save();
}

action.atualizar = (Model, mod, id) => {
    const query = { _id: id };
    return Model.update(query, mod);
}

action.excluir = (Model, id) => {
    const query = { _id: id };
    return Model.remove(query);
}

module.exports = action;