const action = {}

action.getAll = ( Model ) =>
    Model.find( {} )

action.getById = ( Model, id ) =>
    Model.findOne( { _id: id } )

action.create = ( Model, body ) =>
    Model.create( body )

action.update = ( Model, mod, id ) =>
    Model.findOneAndUpdate( { _id: id }, mod, { new: true } )

action.remove = ( Model, id ) =>
    Model.findOneAndRemove( { _id: id } )

module.exports = action