const minhaConta = (Model, usuarioId) =>
    Model.findOne({ _id: usuarioId }, "-credenciais")

module.exports = minhaConta