
module.exports = {
   return_feedback(req, res) {
    console.log("Chegou um feedback");
    
    console.log(req.body.user);
    req.io.emit(req.body.user, {verifica: true});
    res.status(200).send("ok");
  }
};