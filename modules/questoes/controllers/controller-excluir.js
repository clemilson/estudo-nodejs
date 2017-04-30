const excluir = require('./../actions/action-crud').excluir

const controller = (Model) => (req, res) => {

    const id = req.params.id

    excluir(Model, id)
        .then(data => res.json(data))
        .catch(err => res.send('Erro: ', err))

}

module.exports = controller