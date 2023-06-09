const express = require("express");
const User = require('../models/user');
const router = express.Router();

router
  .post('/login', async (req, res) => {
    try {
      const user = await User.login(req.body.userid, req.body.postcontent);
      res.send({...user, postcontent: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const user = await User.register(req.body.userid, req.body.postcontent);
      res.send({...user, postcontent: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const user = await User.updatePostcontent(req.body.id, req.body.postcontent);
      res.send({...user, postcontent: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await User.deleteUser(req.body.id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })


module.exports = router;