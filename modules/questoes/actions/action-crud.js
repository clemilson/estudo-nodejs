'use strict';

const action = {};

action.cadastrar = (Model, body) => {
    const model = new Model(body);
    return model.save();
}

action.find = (Model) => {
    const query = {};
    return Model.find(query).populate("topicos.questoes");
};

action.findOne = (Model,questaoId) => {
    const query = { _id: gameId};
    return Model.findOne(query).populate("topicos.questoes");
};

module.exports = action;