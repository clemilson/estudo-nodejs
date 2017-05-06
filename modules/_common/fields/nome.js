module.exports = {
    type: String,
    validate: require('./../attributes/isString-lengthGTE3'),
    required: true,
    index: false
}