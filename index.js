//const functions = require('firebase-functions');
const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';





app.use(express.json());
app.use(require('./src/routes'));
 
app.listen(PORT, HOST)
 

 //exports.SmartAir = functions.https.onRequest(app);
