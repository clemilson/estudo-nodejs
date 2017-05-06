module.exports = {
    type: String,
    get: require('./../attributes/toLower'),
    set: require('./../attributes/toLower'),
    validate: require('./../attributes/isEMAIL'),
    required: true,
    index: false
}