'use strict';

const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const _timeStamp  = require('../../_common/fields/timeStamp');

const _schema = {
        enunciado : {
            type: String,
            required: true,
            index: false
        },
        qtd_acertos : { 
            type: Number, 
            default: 0,
            required: false
        },
        qtd_erros : { 
            type: Number, 
            default: 0,
            required: false
        },
        alternativa: [
          {
            texto : {
                type: String,
                required: true,
                index: false
            },
            flag_correta  : {
              type: Boolean, 
              index: false,
              default: true
            },
            qtd_marcacoes : { 
                type: Number, 
                default: 0,
                required: false
            }
          }
        ]
    };         
 
const schema = new Schema(_schema, _timeStamp);

module.exports = schema;