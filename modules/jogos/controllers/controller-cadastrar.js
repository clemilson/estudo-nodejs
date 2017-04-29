'use strict';

const cadastrar = require('./../actions/action-crud').cadastrar,
    QuestaoController = require('./../../questoes/controllers'),
    Promise = require("bluebird");

/*
    topico { nome: 'Enem 2015.1',                                     
  ativo: true,                                                    
  questoes:                                                       
   [ { enunciado: 'Lorem enunciado', alternativa: [Object] },     
     { enunciado: 'Lorem enunciado 2', alternativa: [Object] } ] }
topico { nome: 'Enem 2015.2',                                     
  ativo: true,                                                    
  questoes:                                                       
   [ { enunciado: 'Lorem enunciado 3', alternativa: [Object] },   
     { enunciado: 'Lorem enunciado 4', alternativa: [Object] } ] } */

const atualizaRef = (fn, topico, index) => questaoInserida => {
    // console.log('\n tópico', topico)
    // console.log('\n index', index)
    // console.log('\n questao inserida', questaoInserida)
    
    return fn(topico, index, questaoInserida)
}

const cb = (atualizarReferencia) => (topico, index) => {

    // console.log('topico', topico)
    
    const promisesQuestoes = topico.questoes.map((questao, index) => {
        // console.log('questao', questao)
        return QuestaoController.cadastrarPromise(questao)
            .then(atualizaRef(atualizarReferencia, topico, index))
    })
    //console.log('promisesQuestoes', promisesQuestoes)
    return Promise.all(promisesQuestoes)
}

const cadastrarQuestoes = (jogo) => {
    
    const atualizarReferencia = (topico, index, questaoInserida) => {
        topico.questoes[index] = questaoInserida._id;

        console.log('topico', topico)

    }

    console.log('jogo.topicos', jogo.topicos)

    return Promise.map(jogo.topicos, cb(atualizarReferencia))
}

const controller = (Model) =>
    (req, res) =>
        cadastrarQuestoes(req.body)
            .then(cadastrar(Model, req.body))
            .then(jogo => res.json(jogo))
            .catch(err => console.log(err))

module.exports = controller