'use strict';

const callback200 = require('./../../../_config/actions/action-callback-http-200');

module.exports = (Model) => {
  return (req, res) => {
   
    const query = { _id: req.params.id };
    const mod   = {exclusao_logica : true};

    //Exclusão lógica -> seta a flag ativa do jogo como false;

    Model.update(query, mod, (err, data) => callback200(err, data, res));
    //Model.remove(query, (err, data) => callback200(err, data, res));
    
  };
};