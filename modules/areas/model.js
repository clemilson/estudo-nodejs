const mongoose = require('mongoose'),
    Schema = require('./schema')

const model = mongoose.model('Areas', Schema)

module.exports = model