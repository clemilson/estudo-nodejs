'use strict';

const router        = require('express').Router();
const auth          = require('./../../_config/authentication/');
const Controller    = require('./controllers');
const getToken      = require('./../../_config/authentication/getToken');

router.get('/', auth.authorize, Controller.obterTodos);

//Login
router.post('/login', Controller.autenticar);

router.get('/minhaConta', auth.authorize, auth.getUser, Controller.minhaConta);
router.get('/:id', auth.authorize, Controller.obterPorId);
router.post('/', auth.authorize, Controller.cadastrar);
router.put('/:id', auth.authorize, Controller.atualizar);
router.delete('/:id', auth.authorize, Controller.excluir);

module.exports = router;