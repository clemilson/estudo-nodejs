const router = require('express').Router(),
    auth = require('./../../_config/authentication/'),
    Controller = require('./controllers')

//router.get('/', auth.authorize, Controller.obterTodos)
router.get('/', Controller.obterTodos)
router.get('/:id', Controller.obterPorId)
router.post('/', Controller.cadastrar)
router.put('/:id', Controller.atualizar)
router.delete('/:id', Controller.excluir)

module.exports = router