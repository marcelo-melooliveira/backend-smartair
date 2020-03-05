const mqtt = require("mqtt");
//const client = mqtt.connect("mqtt://test.mosquitto.org/");
const client = mqtt.connect("mqtt://broker.hivemq.com");


const topico = "projeto2020/funcap/smartair/";
const topico_antigo = 'Marcelo/teste/';

client.on("connect", () => {
  // console.log("Conectado ao broker");
});

module.exports = {
   enviar_comando(req, res) {
   client.publish(`${topico}${req.body.blaster}`, `${req.body.comando}`);
    res.json({ verifica: true });
  }
};
