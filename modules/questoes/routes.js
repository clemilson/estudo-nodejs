const router = require('express').Router(),
    auth = require('./../../_config/authentication/'),
    Controller = require('./controllers')

//router.get('/', auth.authorize, Model.obterTodos)
//router.get('/:id', auth.authorize, Model.obterPorId)
//router.post('/', auth.authorize, Model.cadastrar)
//router.put('/:id', auth.authorize, Model.atualizar)
//router.delete('/:id', auth.authorize, Model.excluir)

router.get('/', Controller.obterTodos)
router.get('/:id', Controller.obterPorId)
router.post('/', Controller.cadastrar)
router.put('/:id', Controller.atualizar)
router.delete('/:id', Controller.excluir)

module.exports = router