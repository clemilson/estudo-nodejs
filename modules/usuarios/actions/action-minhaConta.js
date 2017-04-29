'use strict';

const minhaConta = (Model, usuarioId) => {
    const query = { _id: usuarioId };
    return Model.findOne(query, "-credenciais");
};

module.exports = minhaConta;