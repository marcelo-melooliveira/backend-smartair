const admin = require("firebase-admin");

 
module.exports = {
    verificaBlaster (req, res){
        const db = admin.firestore().collection("Blasters").doc(req.body.blaster);
    
    
        db.get().then((doc)=>{
          console.log(doc.data().admin)
    
          if(doc.data().admin){
            res.json({"verifica": true});
    
            
          }else{
    
            db.set({admin: req.body.uid}).then(()=>{
            db.update({users : admin.firestore.FieldValue.arrayUnion(req.body.uid)});
            res.json({"verifica": false});

             // aux_db = admin.firestore().collection(`Users`).doc(req.body.uid);
              // aux_db.update({blasters : admin.firestore.FieldValue.arrayUnion(req.body.blaster)})
            });  
          } 
        })
    
   }

}