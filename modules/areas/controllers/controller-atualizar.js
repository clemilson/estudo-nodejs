const atualizar = require('./../actions/action-crud').atualizar

const controller = (Model) => {
    return (req, res) => {
        
        const mod = req.body
        const id = req.params.id
        
        atualizar(Model, mod, id)
            .then(data => res.json(data))
            .catch(err => res.send('Erro: ', err))
    }
}

module.exports = controller