'use strict';

const autenticar = (Model, usuario, senha_encriptada) => {
  
    const query = {'credenciais.local.usuario': {$eq: usuario}, 'credenciais.local.senha': {$eq: senha_encriptada} };    
    return Model.findOne(query, "nome email");
};

module.exports = autenticar;