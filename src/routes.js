const express = require('express');
const routes = express.Router();

const admin = require("firebase-admin");
const serviceAccount = require('../smart-air-5a097-firebase-adminsdk-6tkue-f2099897c8.json');

const CriarUsuarioController = require('./controllers/CriarUsuarioController');
const VerificaBlasterController = require('./controllers/VerificaBlasterController');
const DadosUsuarioBlaster = require('./controllers/DadosUsuarioBlaster');
const EnviarComandoController = require('./controllers/EnviarComandoController');



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  //databaseURL: "https://smart-air-5a097.firebaseio.com"
});

routes.get("/teste", (req, res)=>{
  res.send("Servidor no ar!");
});

routes.post("/criar", CriarUsuarioController.criar);

routes.post("/verifica-blaster", VerificaBlasterController.verificaBlaster);

routes.post("/dados-usuario-blaster", DadosUsuarioBlaster.dados_usuario_blaster);

routes.post("/comando", EnviarComandoController.enviar_comando);

module.exports = routes;