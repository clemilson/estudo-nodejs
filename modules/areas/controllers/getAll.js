const getAll = require( './../actions/crud' ).getAll

const controller = ( Model ) => ( req, res ) =>
    getAll( Model )
        .then( data => res.json( data ) )
        .catch( err => res.send( 'Error: ', err ) )

module.exports = controller