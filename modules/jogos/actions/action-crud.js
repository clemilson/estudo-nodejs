const action = {}

action.obterTodos = (Model) =>
    Model.find({ "exclusao_logica": false }).populate("topicos.questoes")

action.obterPorId = (Model, id) => {
    const query = { _id: id, "exclusao_logica": false }
    return Model.findOne(query).populate("topicos.questoes")
}

action.cadastrar = (Model, body) =>
    Model.create(body)

action.atualizar = (Model, mod, id) =>
    Model.findOneAndUpdate({ _id: id }, mod, { new: true })

action.excluir = (Model, id) => {
    const mod = { exclusao_logica: true }
    return Model.findOneAndUpdate({ _id: id }, mod, { new: true })
}

module.exports = action