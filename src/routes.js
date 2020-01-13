const express = require('express');
const routes = express.Router();

const admin = require("firebase-admin");
const serviceAccount = require('../smart-air-5a097-firebase-adminsdk-6tkue-f2099897c8.json');

const CriarUsuarioController = require('./controllers/CriarUsuarioController');
const VerificaBlasterController = require('./controllers/VerificaBlasterController');
const DadosUsuarioBlaster = require('./controllers/DadosUsuarioBlaster');

const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org/');

const topico = 'Marcelo/teste/SmartAir';

client.on('connect', ()=>{
   // console.log("Conectado ao broker");    
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  //databaseURL: "https://smart-air-5a097.firebaseio.com"
});


routes.post("/criar", CriarUsuarioController.criar);

routes.post("/verifica-blaster", VerificaBlasterController.verificaBlaster);

routes.post("/dados-usuario-blaster", DadosUsuarioBlaster.dados_usuario_blaster);

routes.get("/teste-mqtt", (req, res)=>{

  client.publish('Marcelo/teste/SmartAir', 'mensagem vinda do Firesabe');
  res.send("deu certo a conexão mqtt alterado mais uma vez!!"); 

  /*
  client.subscribe(topico, (err)=>{
    if(!err){
       // console.log("Inscrito no tópico");
        //client.publish('Marcelo/teste/SmartAir', 'mensagem vinda do Firesabe');
        res.send("deu certo a conexão mqtt alterado mais uma vez!!"); 
    } else{
      res.send("Não deu certo a conexão mqtt 2 teste");
    }
})

  */

});

module.exports = routes;