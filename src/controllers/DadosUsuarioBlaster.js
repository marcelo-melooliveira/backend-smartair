const admin = require("firebase-admin");

 
module.exports = {
    dados_usuario_blaster (req, res){
        const db = admin.firestore().collection("Users").doc(req.body.uid);
        db.update({blasters : admin.firestore.FieldValue.arrayUnion(req.body.dados)}).then(()=>{
            res.json({salvo:true})
        }).catch(()=>{
            res.json({salvo:false})
        })
    }
}