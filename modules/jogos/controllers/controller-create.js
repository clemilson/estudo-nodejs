const cadastrar = require('./../actions/action-crud').cadastrar,
    QuestaoController = require('./../../questoes/controllers'),
    Promise = require("bluebird")

//1. cadastrar jogo e tópicos
//2. cadastrar questões
//3. atualizar ids de questões do jogo e salvar
//4. retornar Json com os dados do jogo

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

// const successQuestoes = (data) => {
//     questoesIds.push(data._id)
// }
const logError = (err) => console.log('erro: ', err)


const cbQuestoes = async (arr, i) => {

    //const promises = arr.map(async (obj) => {
    const questoesInseridas = arr.map(async (obj) => {

        // obj
        //     .then(successQuestoes)
        //     .catch(logError)

        const questao = await obj
        console.log('questao', questao)
        
        questoesIds.push(questao._id)
        
        return questoesIds        
    })

    console.log('questoesInseridas', await questoesInseridas)

    return questoesInseridas
}

const controller = (Model) =>
    (req, res) => {

        const jogo = req.body
        const questoes = req.body.topicos.map(pegaQuestoes)
        const topicos = req.body.topicos.map(limpaQuestoes)

        // console.log('topicos', topicos)
        // console.log('questoes', questoes)

        req.body.topicos = topicos

        cadastrar(Model, req.body)
            .then(data => {
                //console.log('data', data)
                const id = data._id

                const questoesPromise = questoes.map(cadastraQuestao)
                // console.log('questoesPromise', questoesPromise)

                //questoesPromise -> array de promises
                questoesPromise.map(cbQuestoes)

                //Desafio: Exibir questoesIds fora utilizando async e await
                console.log('questoesIds FORA', questoesIds)

            })
            .catch(data => console.log('catch', data))
    }


module.exports = controller