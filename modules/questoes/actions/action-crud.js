const action = {}

action.obterTodos = (Model) =>
    Model.find({}).populate("topicos.questoes")

action.obterPorId = (Model, id) =>
    Model.findOne({ _id: id }).populate("topicos.questoes")

action.cadastrar = (Model, body) =>
    Model.create(body)

action.atualizar = (Model, mod, id) =>
    Model.findOneAndUpdate({ _id: id }, mod, { new: true })

action.excluir = (Model, id) => {
    const mod   = { exclusao_logica : true }
    Model.findOneAndUpdate({ _id: id }, mod, { new: true })
}

module.exports = action