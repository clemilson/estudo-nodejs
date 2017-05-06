const getById = require( './../actions/crud' ).getById

const controller = ( Model ) => ( req, res ) => 
    getById( Model, req.params.id )
        .then( data => res.json( data ))
        .catch( err => res.send( 'Error: ', err ))

module.exports = controller