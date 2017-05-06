const create = require( './../actions/crud' ).create

const controller = ( Model ) => ( req, res ) =>
    create( Model, req.body )
        .then( data => res.json( data ))
        .catch(( err ) => res.send( 'Error: ', err ))

module.exports = controller