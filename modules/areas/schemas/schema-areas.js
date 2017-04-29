'use strict';

const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const _timeStamp  = require('../../_common/fields/timeStamp');

const _schema = {
  nome: {
    type: String,
    validate: require('./../../_common/attributes/isString-lengthGTE3'),
    required: true,
    index: false
  }
}

const schema = new Schema(_schema, _timeStamp);

module.exports = schema;