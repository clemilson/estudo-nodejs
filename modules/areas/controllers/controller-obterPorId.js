const obterPorId = require('./../actions/action-crud').obterPorId

const controller = (Model) => (req, res) => {

    const id = req.params.id

    obterPorId(Model, id)
        .then(data => res.json(data))
        .catch(err => res.send('Erro: ', err))
}

module.exports = controller