const mongoose = require('mongoose'),
    Schema = require('./schema')

const model = mongoose.model('Area', Schema)

module.exports = model