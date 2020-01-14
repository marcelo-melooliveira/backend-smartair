const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org/');

const topico = 'Marcelo/teste/SmartAir';

client.on('connect', ()=>{
   // console.log("Conectado ao broker");    
})

module.exports = {
    enviar_comando (req, res){
        client.publish(`Marcelo/teste/${req.body.blaster}`, `mensagem do Servidor aws para o blaster ${req.body.blaster}`);
        res.json({"verifica":true})
    }
}