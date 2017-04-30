require('dotenv').config()

const md5 = require('md5'),
    cadastrar = require('./../actions/action-crud').cadastrar

const controller = (Model) => (req, res) => {

    const body = req.body
    body.credenciais.local.senha = md5(body.credenciais.local.senha, process.env.JWT_salt_key)

    cadastrar(Model, body)
        .then(data => res.json(data))
        .catch(err => res.send('Erro: ', err))

}

module.exports = controller