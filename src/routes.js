const express = require('express');
const routes = express.Router();

const admin = require("firebase-admin");
const serviceAccount = require('../credencial/smart-air-5a097-firebase-adminsdk-6tkue-f2099897c8.json');

const CriarUsuarioController = require('./controllers/CriarUsuarioController');
const VerificaBlasterController = require('./controllers/VerificaBlasterController');
const DadosUsuarioBlaster = require('./controllers/DadosUsuarioBlaster');
const EnviarComandoController = require('./controllers/EnviarComandoController');
const BuscaControleRemotoController = require('./controllers/BuscaControleRemotoController');
const BuscaDispositivosUser = require('./controllers/BuscaDispositivosUserController');
const ReturnFeedbackController = require('./controllers/ReturnFeedbackController');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  //databaseURL: "https://smart-air-5a097.firebaseio.com"
});

routes.get("/teste", (req, res)=>{
  res.send("Servidor no ar atualizado 08/05!");
});

routes.post("/criar", CriarUsuarioController.criar);

routes.post("/verifica-blaster", VerificaBlasterController.verificaBlaster);

routes.post("/dados-usuario-blaster", DadosUsuarioBlaster.dados_usuario_blaster);

routes.post("/comando", EnviarComandoController.enviar_comando);

routes.get("/busca-controle", BuscaControleRemotoController.buscaControle);

routes.get("/busca-dispositivos", BuscaDispositivosUser.buscaDispositivos);

routes.post("/return-feedback", ReturnFeedbackController.return_feedback);


module.exports = routes;