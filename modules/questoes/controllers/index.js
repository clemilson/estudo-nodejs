'use strict';

const mongoose  = require('mongoose');
const Schema    = require('./../schemas/schema-questao');
const Model     = mongoose.model('questoes', Schema);

//features
const find         = require('./controller-find')(Model);
const findOne      = require('./../actions/action-findOne')(Model);
const create       = require('./controller-create')(Model);
const update       = require('./../actions/action-update')(Model);
const remove       = require('./../actions/action-remove')(Model);
const cadastrarPromise = require('./controller-cadastrarPromise')(Model);

const features = {
    find,
    findOne,
    create,    
    update,
    remove,
    cadastrarPromise
};

module.exports = features;