const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
const _timeStamp = require( './../_common/fields/timeStamp' )

const _schema = {
  nome: require( './../_common/fields/nome' )
}

const schema = new Schema( _schema, _timeStamp )

module.exports = schema