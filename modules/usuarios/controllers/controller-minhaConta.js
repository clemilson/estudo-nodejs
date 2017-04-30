const minhaConta = require('./../actions/action-minhaConta')

const controller = (Model) => (req, res, next) => {

    const usuarioId = req.tokenDecoded.id

    minhaConta(Model, usuarioId)
        .then(data => res.json(data))
        .catch(err => res.send('Erro: ', err))
}

module.exports = controller