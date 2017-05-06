'use strict';

const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const _timeStamp  = require('./../../_common/fields/timeStamp');

const _schema = {
  nome : {
    type: String, 
    validate: require('./../../_common/attributes/isString-lengthGTE3'), 
    required: true, 
    index: false
  },
  descricao : {
    type: String, 
    validate: require('./../../_common/attributes/isDescription'), 
    required: true, 
    index: false
  },
  logo : {
      type: String,
      required: false,
      index: false
  },
  numero_de_questoes_por_quiz : {
    type: Number, 
    required: true,
    min: 0,
    index: false
  },
  pontos_por_questao : {
    type: Number, 
    required: true,
    min: 0,
    index: false
  },
  area_de_conhecimento : {
      type: Schema.Types.ObjectId,
      required: true,
      index: false
  },
  regulamento : {
      type: String,
      required: true,
      index: false
  },
  flag_ativo : {
    type: Boolean, 
    index: false,
    default: false
  },
  exclusao_logica : {
    type: Boolean, 
    index: false,
    default: false
  },
  topicos: [
    {
        nome : {
          type: String, 
          validate: require('./../../_common/attributes/isString-lengthGTE3'), 
          required: true, 
          index: false
        },
        ativo : {
          type: Boolean, 
          index: false,
          default: true
        },
        qtd_acessos : { 
            type: Number, 
            default: 0,
            required: false
        },
        questoes: [
           { type: Schema.Types.ObjectId, ref: 'Questao' }
        ]
    }            
  ],
};

const schema = new Schema(_schema, _timeStamp);

module.exports = schema;