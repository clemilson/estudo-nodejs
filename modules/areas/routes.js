const router = require('express').Router(),
    auth = require('./../../_config/authentication/'),
    Controller = require('./controllers')

router.get('/', auth.authorize, Controller.obterTodos)
router.get('/:id', auth.authorize, Controller.obterPorId)
router.post('/', auth.authorize, Controller.cadastrar)
router.put('/:id', auth.authorize, Controller.atualizar)
router.delete('/:id', auth.authorize, Controller.excluir)

module.exports = router