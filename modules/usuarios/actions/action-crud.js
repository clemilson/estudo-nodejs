const action = {}

action.obterTodos = (Model) =>
    Model.find({}, "-credenciais")

action.obterPorId = (Model, id) =>
    Model.findOne({ _id: id }, "-credenciais")

action.cadastrar = (Model, body) =>
    Model.create(body)

action.atualizar = (Model, mod, id) =>
    Model.findOneAndUpdate({ _id: id }, mod, { new: true })

action.excluir = (Model, id) =>
    Model.findOneAndRemove({ _id: id })

module.exports = action