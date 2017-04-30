const mongoose = require('mongoose'),
    Schema = require('./schema')

const model = mongoose.model('Usuario', Schema)

module.exports = model