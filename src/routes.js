const express = require('express');
const routes = express.Router();

const admin = require("firebase-admin");
const serviceAccount = require('../smart-air-5a097-firebase-adminsdk-6tkue-f2099897c8.json');

const CriarUsuarioController = require('./controllers/CriarUsuarioController');
const VerificaBlasterController = require('./controllers/VerificaBlasterController');
const DadosUsuarioBlaster = require('./controllers/DadosUsuarioBlaster');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  //databaseURL: "https://smart-air-5a097.firebaseio.com"
});


routes.post("/criar", CriarUsuarioController.criar);

routes.post("/verifica-blaster", VerificaBlasterController.verificaBlaster);

routes.post("/dados-usuario-blaster", DadosUsuarioBlaster.dados_usuario_blaster);

module.exports = routes;