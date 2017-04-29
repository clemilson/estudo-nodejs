'use strict';

const   cadastrar         = require('./../actions/action-crud').cadastrar,
        QuestaoController = require('./../../questoes/controllers'),
        Promise           = require("bluebird");

const cadastrarQuestoes = (jogo) => {
    const atualizarReferencia = (topico, index, questaoInserida) => {
        topico.questoes[index] = questaoInserida._id;
    }
    return Promise.map(jogo.topicos, (topico, index) => {
        const promisesQuestoes = topico.questoes.map((questao, index) => {
            return QuestaoController.cadastrarPromise(questao)
                .then(questaoInserida => atualizarReferencia(topico, index, questaoInserida));
        })
        return Promise.all(promisesQuestoes);
    })
}

const controller = (Model) => {
    return (req, res) => {
        const jogo = req.body;

        cadastrarQuestoes(jogo)
            .then(() => {
                return cadastrar(Model, jogo);
            })
            .then(jogo => {
                res.json(jogo);
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = controller;