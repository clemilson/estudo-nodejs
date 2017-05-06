const update = require( './../actions/crud' ).update

const controller = ( Model ) => ( req, res ) => {

    const mod = req.body
    const id = req.params.id

    update( Model, mod, id )
        .then( data => res.json( data ) )
        .catch( err => res.send( 'Erro: ', err ) )
}

module.exports = controller