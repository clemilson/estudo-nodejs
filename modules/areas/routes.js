'use strict';

const router        = require('express').Router();
const auth          = require('./../../_config/authentication/')
const Controller    = require('./controllers');

router.get('/',  auth.authorize, Controller.obterTodos);
router.get('/:id', auth.authorize, Controller.obterPorId);
router.post('/', auth.authorize, Controller.cadastrar);
router.put('/:id', auth.authorize, Controller.atualizar);
router.delete('/:id', auth.authorize, Controller.excluir);

module.exports = router;