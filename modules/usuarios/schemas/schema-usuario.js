'use strict';

const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const _timeStamp = require('../../_common/fields/timeStamp');

const _schema = {
  nome: {
    type: String, 
    validate: require('./../../_common/attributes/isString-lengthGTE3'), 
    required: true, 
    index: false
  },
  email: {
    type: String, 
    get: require('./../../_common/attributes/toLower'), 
    set: require('./../../_common/attributes/toLower'), 
    validate: require('./../../_common/attributes/isEMAIL'), 
    required: true, 
    index: false
  },
  sobre: {
    type: String, 
    validate: require('./../../_common/attributes/isDescription'), 
    required: false, 
    index: false
  },
  imagem_avatar: {
      type: String,
      required: false,
      index: false
  },
  credenciais : {
    local: {
      usuario:   {
        type: String, 
        set: require('./../../_common/attributes/toLower'), 
        validate: require('./../../_common/attributes/isString-lengthGTE3'), 
        required: false, 
        index: false
      },
      senha: {
        type: String, 
        validate: require('./../../_common/attributes/isPassword'), 
        required: false, 
        index: false
      }
    }
  }
}

const schema = new Schema(_schema, _timeStamp);

module.exports = schema;