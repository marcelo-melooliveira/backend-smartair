const admin = require("firebase-admin");
 
module.exports = {
    buscaControle (req, res){
        const db = admin.firestore().collection("Controles").doc(req.query.controle);
        console.log(req.query.controle);
    
        db.get().then((doc)=>{
            if(doc.data()){
                res.json(doc.data());  
            }else{
                res.json(null);  
            }
                        
        })
    
   }

}