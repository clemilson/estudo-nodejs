const Model = require( './../model' )

module.exports = {
    getAll: require( './getAll' )( Model ),
    getById: require( './getById' )( Model ),
    create: require( './create' )( Model ),
    update: require( './update' )( Model ),
    remove: require( './remove' )( Model )
}