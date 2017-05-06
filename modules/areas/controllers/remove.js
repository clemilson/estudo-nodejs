const remove = require( './../actions/crud' ).remove

const controller = ( Model ) => ( req, res ) =>
    remove( Model, req.params.id )
        .then( data => res.json( data ))
        .catch( err => res.send( 'Error: ', err ))

module.exports = controller