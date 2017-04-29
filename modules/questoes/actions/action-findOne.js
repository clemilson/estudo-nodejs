'use strict';

const callback200 = require('./../../../_config/actions/action-callback-http-200');

module.exports = (Model) => {
  return (req, res) => {
    
    const query = { _id: req.params.id };
        
    Model.findOne(query, (err, data) => callback200(err, data, res));
    
  };
};