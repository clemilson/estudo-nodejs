const create = require('./../actions/action-crud').create,
    QuestaoController = require('./../../questoes/controllers'),
    Promise = require("bluebird");

//1. create jogo e tópicos
//2. create questões
//3. atualizar ids de questões do jogo

const limpaQuestoes = (elem, i) => {
    delete elem.questoes
    return elem
}
const pegaQuestoes = (elem, i) => elem.questoes

const cadastraQuestao = (arr, i) => {
    const promises = arr.map(obj => {
        return QuestaoController.cadastrarPromise(obj)
    })
    //console.log('promises', promises)
    return promises
}

const questoesIds = []
const successQuestoes = (data) => {
    questoesIds.push(data._id)
} //console.log('sucesso: ', data)
const logError = (err) => console.log('erro: ', err)


const cbQuestoes  = (arr, i) => {
    const promises = arr.map(obj => {
        obj
        .then(successQuestoes)
        .catch(logError)
    })
    //console.log('promises', promises)
    return promises
}

const controller = (Model) =>
    (req, res) => {
        
        const jogo = req.body
        const questoes = req.body.topicos.map(pegaQuestoes)
        const topicos = req.body.topicos.map(limpaQuestoes)

        // console.log('topicos', topicos)
        // console.log('questoes', questoes)

        req.body.topicos = topicos
        
        create(Model, req.body)
        .then(data => {
            //console.log('data', data)
            const id = data._id

            const questoesPromise = questoes.map(cadastraQuestao)
            // console.log('questoesPromise', questoesPromise)

            questoesPromise.map(cbQuestoes)
            
            console.log('questoesIds', questoesIds)

        })
        .catch(data => console.log('catch', data))
    }
        

module.exports = controller