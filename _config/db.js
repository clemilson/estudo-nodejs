'use strict';

require('dotenv').config();
const mongoose  = require('mongoose');
const dbURI     = process.env.Mongo_cs_development;

mongoose.Promise = global.Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose conectado:' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose erro de conexão: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose desconectado');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose conexão aberta.');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose desconectado pelo app');
    process.exit(0);
  });
});