const admin = require("firebase-admin");
 
module.exports = {
    buscaDispositivos (req, res){
        const db = admin.firestore().collection("Users").doc(req.query.uid);
        console.log(req.query.uid);
    
        db.get().then((doc)=>{
            if(doc.data()){
                res.json(doc.data().blasters);  
            }else{
                res.json(null);  
            }
                        
        })
    
   }

}