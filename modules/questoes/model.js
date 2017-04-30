const mongoose = require('mongoose'),
    Schema = require('./schema')

const model = mongoose.model('Questao', Schema)

module.exports = model