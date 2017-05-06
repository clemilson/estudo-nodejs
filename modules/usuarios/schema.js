const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  _timeStamp = require('./../_common/fields/timeStamp')

const _schema = {
  nome: require('./../_common/fields/nome'),
  sobre: require('./../_common/fields/sobre'),
  email: require('./../_common/fields/email'),
  imagem_avatar: require('./../_common/fields/imagem_avatar'),
  credenciais: {
    local: require('./../_common/fields/credenciais_local')
  }
}

const schema = new Schema(_schema, _timeStamp)

module.exports = schema