//const functions = require('firebase-functions');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const mqtt = require("mqtt");
// const client = mqtt.connect("mqtt://test.mosquitto.org/");
const client = mqtt.connect("mqtt://broker.hivemq.com");


const PORT = 3000;
const HOST = '0.0.0.0';
const server = require('http').Server(app);
const io = require('socket.io')(server);


client.on("connect", () => {
    console.log("Conectado ao broker");
  });

mongoose.connect('mongodb+srv://new-marcelo:ma1234@mmteste-878gh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) =>{
    req.io = io;

    return next();
})
app.use(cors());
app.use(express.json());
app.use(require('./src/routes'));

client.on('connect', ()=>{
console.log("conectado");
client.subscribe('projeto2020/funcap/smartair/return', (err)=>{
    if(!err){
        console.log("Inscrito!");
        client.on('message', (topic, messege) => {
            const aux = JSON.parse(messege.toString());
            console.log(aux.user);
            io.emit(aux.user, aux);
        })
    }    
})
})




 
server.listen(PORT, HOST)
 

 //exports.SmartAir = functions.https.onRequest(app);
