module.exports = {
    usuario: {
        type: String,
        set: require('./../attributes/toLower'),
        validate: require('./../attributes/isString-lengthGTE3'),
        required: false,
        index: false
    },
    senha: {
        type: String,
        validate: require('./../attributes/isPassword'),
        required: false,
        index: false
    }
}