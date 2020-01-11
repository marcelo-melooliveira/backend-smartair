const functions = require('firebase-functions');
const express = require('express');


const app = express();


app.use(express.json());
app.use(require('./src/routes'));
 
// app.listen(3000, ()=>{
//     console.log("App iniciado na porta 3000! :)")
// })
 

 exports.SmartAir = functions.https.onRequest(app);
