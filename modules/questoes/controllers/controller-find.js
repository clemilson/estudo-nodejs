'use strict';

const buscar = require('./../actions/action-crud').find;

const method = (Model) => {
    return (req, res) => {
        
    const createPromise = buscar(Model);
    createPromise
        .then((jogo) => {
            res.json(jogo);
        })
        .catch((err) => {
            console.log(err)
            res.send('Deu ruim: ',err);
        })        
    }
}

module.exports = method;