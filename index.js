//const functions = require('firebase-functions');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;
const HOST = '0.0.0.0';

mongoose.connect('mongodb+srv://new-marcelo:ma1234@mmteste-878gh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(express.json());
app.use(require('./src/routes'));
 
app.listen(PORT, HOST)
 

 //exports.SmartAir = functions.https.onRequest(app);
