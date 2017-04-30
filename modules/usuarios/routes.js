const router = require('express').Router(),
    auth = require('./../../_config/authentication/'),
    Controller = require('./controllers'),
    getToken = require('./../../_config/authentication/getToken')

//auth.authorize,

router.get('/', Controller.obterTodos)

//Login
router.post('/login', Controller.autenticar)

// router.get('/minhaConta', auth.authorize, auth.getUser, Controller.minhaConta)
router.get('/:id', Controller.obterPorId)
router.post('/', Controller.cadastrar)
router.put('/:id', Controller.atualizar)
router.delete('/:id', Controller.excluir)

module.exports = router