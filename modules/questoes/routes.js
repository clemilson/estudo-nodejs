'use strict';

const router        = require('express').Router();
const auth          = require('./../../_config/authentication/')
const Controller    = require('./controllers');

//router.get('/', auth.authorize, Model.find);
//router.get('/:id', auth.authorize, Model.findOne);
//router.post('/', auth.authorize, Model.create);
//router.put('/:id', auth.authorize, Model.update);
//router.delete('/:id', auth.authorize, Model.remove);

router.get('/',  Controller.find);
router.get('/:id', Controller.findOne);
router.post('/', Controller.create);
router.put('/:id', Controller.update);
router.delete('/:id', Controller.remove);

module.exports = router;