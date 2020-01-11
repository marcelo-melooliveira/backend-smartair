const admin = require("firebase-admin"); 
 
module.exports = {
     criar (req, res){
        const db = admin.firestore().collection("Users");
        //console.log(req.body.UID)
         db.doc(req.body.UID).set(req.body)
        .then(function () {
            res.json({ criado: true });
        }) 

     
    }

}