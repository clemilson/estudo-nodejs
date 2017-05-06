const router = require( 'express' ).Router()
const auth = require( './../../_config/authentication/' )
const Controller = require( './controllers' )

router.get( '/', auth.authorize, Controller.getAll )
router.get( '/:id', auth.authorize, Controller.getById )
router.post( '/', auth.authorize, Controller.create )
router.put( '/:id', auth.authorize, Controller.update )
router.delete( '/:id', auth.authorize, Controller.remove )

module.exports = router