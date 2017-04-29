'use strict';

const   router        = require('express').Router(),
        auth          = require('./../../_config/authentication/'),
        Controller    = require('./controllers');

//router.get('/', auth.authorize, Model.find);
//router.get('/:id', auth.authorize, Model.findOne);
//router.post('/', auth.authorize, Model.create);
//router.put('/:id', auth.authorize, Model.update);
//router.delete('/:id', auth.authorize, Model.remove);

router.get('/',  Controller.obterTodos);
router.get('/:id', Controller.obterPorId);
router.post('/', Controller.create);
router.put('/:id', Controller.atualizar);
router.delete('/:id', Controller.excluir);

module.exports = router;