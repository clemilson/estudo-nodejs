const mongoose = require( 'mongoose' )
const Schema = require( './schema' )

const model = mongoose.model( 'Area', Schema )

module.exports = model