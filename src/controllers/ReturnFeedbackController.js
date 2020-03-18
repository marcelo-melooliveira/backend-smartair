
module.exports = {
   return_feedback(req, res) {
    console.log("Chegou um feedback");
    console.log(req.body);
    req.io.emit(req.body.user, req.body);
    res.status(200).send("ok");
  }
};