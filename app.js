require('./_config/db')

global.TEXTS = require('./_config/languages')('pt-br')
global.appRoot = require('path').resolve(__dirname)
global.contentRoot = appRoot + '\\_content'

const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const allowCors = require('./_config/cors')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }))
app.use(cookieParser())
app.use(allowCors)

//routes
/* Cria as rotas dinamicamente a partir da pasta modules */
let api = {}
let modules = require('./getModules')
const createRoutes = (element, index) => {
  api[element] = require('./modules/' + element + '/routes')
  app.use('/api/' + element, api[element])
}
modules.forEach(createRoutes)


// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})
*/

// error handler
app.use(function (err, req, res, next) {

  console.log('teste', req.app.get('env'))

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  console.log('Error', err)
})

module.exports = app